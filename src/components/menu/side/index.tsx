import React, { useState, FC } from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps as AntdMenuProps } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;

import './index.less';
import { ServicesP } from 'Src/router';

import routerGather from 'Src/router/gather';
import Utils from 'Src/utils';

interface MenuProps {
  key: string;
  label: string;
  icon: JSX.Element;
  children?: MenuProps[];
}

function getItem(key: string, label: string, icon: JSX.Element, children?: MenuProps[]): MenuProps {
  return {
    key,
    label,
    icon,
    children,
  } as MenuProps;
}

const SideApp: FC = () => {
  const defaultSelectedKeys: string = window.location.pathname;
  const n: number = defaultSelectedKeys.lastIndexOf('/');
  const defaultOpenKeys: string = defaultSelectedKeys.substring(0, n);
  const [openKeys, setOpenKeys] = useState<Array<string>>([defaultOpenKeys]);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  let navigate = useNavigate();
  let menuItems: Array<MenuProps> = [];
  const getMenu = (routerGather: Array<ServicesP>, parent?: ServicesP) => {
    menuItems = routerGather.map((item) => {
      const { path, label, icon, children } = item;
      const keyPath = parent ? `${parent.path}${path}` : path;
      if (children) {
        let _C = getMenu(children, item);
        return getItem(keyPath, label, icon, _C);
      } else {
        return getItem(keyPath, label, icon);
      }
    });
    return menuItems;
  };
  const onOpenChange: AntdMenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };
  return (
    <Sider className="site-layout-position" trigger={null} collapsible collapsed={collapsed}>
      {/* <div className="logo">雪花啤酒-勇闯天涯</div> */}
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[defaultSelectedKeys]}
        // defaultOpenKeys={[openKeys]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={({ key, keyPath }) => {
          console.log(key, keyPath);
          const loggedIn: boolean = Utils.onRouterBefore();
          navigate(loggedIn ? key : '/login');
        }}
        items={getMenu(routerGather)}
      />
    </Sider>
  );
};

export default SideApp;
