import React from 'react';
import Home from 'Src/pages/home';
import { VideoCameraOutlined } from '@ant-design/icons';
// const GetHome = () => {
//   const route = useRoutes([
//     {
//       path: '/home',
//       element: <Home />,
//     },
//   ]);
//   return route;
// };
import { ServicesP } from '../index';

const home: Array<ServicesP> = [
  {
    path: '/home',
    label: '首页',
    icon: <VideoCameraOutlined />,
    element: <Home />,
  },
];
export default home;
