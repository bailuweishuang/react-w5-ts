import React, { Suspense } from 'react';
import { Layout } from 'antd';
import { Route, Routes, Navigate } from 'react-router-dom';
import './index.less';

const { Content } = Layout;

import { ServicesP } from 'Src/router';
import routerGather from 'Src/router/gather';
import Utils from 'Src/utils';

const ContentApp: React.FC = () => {
  let contenItems: Array<JSX.Element> = [];
  const loggedIn = Utils.onRouterBefore();
  const getContent = (routerList: Array<ServicesP>, parent?: ServicesP) => {
    routerList.forEach((item) => {
      const { path, element, children } = item;
      const keyPath = parent ? `${parent.path}${path}` : path;
      if (children) {
        getContent(children, item);
      } else {
        contenItems.push(
          <Route key={keyPath} path={keyPath} element={loggedIn ? element : <Navigate to="/login" />}></Route>,
        );
      }
    });
  };
  getContent(routerGather);

  return (
    <Content
      className="site-layout-background"
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
      }}
    >
      <Suspense fallback={<div>加载中。。。</div>}>
        <Routes>
          {contenItems}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
    </Content>
  );
};

export default ContentApp;
