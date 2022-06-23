import React from 'react';
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';

import './index.less';
import SideApp from './side/index';
import HeaderApp from './header';
import ContentApp from './content';
const App: React.FC = () => {
  return (
    <Layout className="app-layout">
      <SideApp />
      <Layout className="site-layout">
        <HeaderApp />
        <ContentApp />
      </Layout>
    </Layout>
  );
};

export default App;
