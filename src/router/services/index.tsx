import React, { lazy } from 'react';
// import { SharedServices, TreasuryServices } from 'Src/pages/services';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { ServicesP } from '../index';
const SharedServices = lazy(() => import('Src/pages/services/sharedServices'));
const TreasuryServices = lazy(() => import('Src/pages/services/treasuryServices'));
const services: Array<ServicesP> = [
  {
    path: '/services',
    label: '财务云',
    icon: <UploadOutlined />,
    children: [
      {
        path: '/sharedServices',
        label: '共享服务',
        icon: <UploadOutlined />,
        element: <SharedServices />,
      },
      {
        path: '/treasuryServices',
        label: '财资服务',
        icon: <UserOutlined />,
        element: <TreasuryServices />,
      },
    ],
  },
];

export default services;
