import React, {useState} from 'react';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import {History, Settings, GolfCourse} from '@material-ui/icons';

function BottomNav() {
  const [routeScreen, setRouteScreen] = useState('current');

  function handleChangeRoute(e, newRoute) {
    if (newRoute === routeScreen) return;
    setRouteScreen(newRoute);
  }

  return (
    <BottomNavigation value={routeScreen} onChange={handleChangeRoute} showLabels>
      <BottomNavigationAction value='current' label='Current' icon={<GolfCourse />} />
      <BottomNavigationAction value='previous' label='Previous' icon={<History />} />
      <BottomNavigationAction value='settings' label='Settings' icon={<Settings />} />
    </BottomNavigation>
  );
} 

export default BottomNav;
