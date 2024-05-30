import React from 'react';
import DrawerAppBar from './DrawerAppBar';
import { Outlet } from 'react-router-dom';

function ProtectedLayout() {
  return (
    <DrawerAppBar>
      <Outlet />
    </DrawerAppBar>
  );
}

export default ProtectedLayout;
