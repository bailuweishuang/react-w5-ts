import React, { lazy } from 'react';
// import { SharedServices, TreasuryServices } from 'Src/pages/services';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { ServicesP } from '../index';

const SharedServices = lazy(() => import('Src/pages/services/sharedServices'));
const TreasuryServices = lazy(() => import('Src/pages/services/treasuryServices'));
const synergy: Array<ServicesP> = [
  {
    path: '/synergy',
    label: '协同云',
    icon: <UploadOutlined />,
    children: [
      {
        path: '/sharedServices',
        label: '质量管理',
        icon: <UploadOutlined />,
        element: <SharedServices />,
      },
      {
        path: '/treasuryServices',
        label: '工业大脑',
        icon: <UserOutlined />,
        element: <TreasuryServices />,
      },
    ],
  },
];

export default synergy;
