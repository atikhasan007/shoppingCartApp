import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const RootLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default RootLayout;
