import React from 'react';
import Routers from './router';
import { createRoot } from 'react-dom/client';
import 'antd/dist/antd.less';

if (module && module.hot) {
  module.hot.accept();
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Routers />);
