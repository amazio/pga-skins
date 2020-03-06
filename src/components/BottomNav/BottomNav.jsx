import React, {useState} from 'react';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import {Settings, GolfCourse} from '@material-ui/icons';

function BottomNav() {
  const [routeScreen, setRouteScreen] = useState('matches');

  function handleChangeRoute(e, newRoute) {
    if (newRoute === routeScreen) return;
    setRouteScreen(newRoute);
  }

  return (
    <BottomNavigation value={routeScreen} onChange={handleChangeRoute} showLabels>
      <BottomNavigationAction value='matches' label='Matches' icon={<GolfCourse />} />
      <BottomNavigationAction value='settings' label='Settings' icon={<Settings />} />
    </BottomNavigation>
  );
} 

export default BottomNav;
