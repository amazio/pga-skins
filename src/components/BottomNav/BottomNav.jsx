import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Settings, GolfCourse } from '@material-ui/icons';

export default function BottomNav() {
  const history = useHistory();
  const {pathname} = useLocation();
  return (
    <BottomNavigation value={pathname} onChange={(e, newRoute) => history.push(newRoute)} showLabels>
      <BottomNavigationAction value='/' label='Matches' icon={<GolfCourse />} />
      <BottomNavigationAction value='/settings' label='Settings' icon={<Settings />} />
    </BottomNavigation>
  );
} 
