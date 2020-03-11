import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Settings, GolfCourse } from '@material-ui/icons';
import { set } from 'mongoose';

export default function BottomNav() {
  const history = useHistory();
  const [selected, setSelected] = useState('');
  let {pathname} = useLocation();

  useEffect(function() {
    if (pathname === '/') {
      setSelected('matches');
    } else if (pathname === '/settings') {
      setSelected('settings');
    } else {
      // Don't select Matches or Settings icon
      setSelected('');
    }
  }, [pathname]);

  function handleChangeRoute(e, newRoute) {
    switch (newRoute) {
      case 'matches':
        history.push('/');
        break;
      case 'settings':
        history.push('/settings');
        break;
    }
  }

  return (
    <BottomNavigation value={selected} onChange={handleChangeRoute} showLabels>
      <BottomNavigationAction value='matches' label='Matches' icon={<GolfCourse />} />
      <BottomNavigationAction value='settings' label='Settings' icon={<Settings />} />
    </BottomNavigation>
  );
} 
