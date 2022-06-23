import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuApp } from 'Src/components';
import LoginApp from 'Src/pages/login';

export interface ServicesP {
  path: string;
  label: string;
  icon: JSX.Element;
  element?: JSX.Element;
  children?: ServicesP[];
}

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MenuApp />} />
        <Route path="/login" element={<LoginApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
