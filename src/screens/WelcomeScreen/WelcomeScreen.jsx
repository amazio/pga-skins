import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import StoreProvider from '../../contexts/StoreProvider';
import {Button, TextField, Typography} from '@material-ui/core';
import userService from '../../services/userService';


import { Link } from 'react-router-dom'

function WelcomeScreen(props) {
  const history = useHistory();
  const {dispatch} = useContext(StoreProvider);
  const [username, setUsername] = useState('');

  function updateUsername() {
    userService.updateUsername(username, dispatch);
    history.push('/');
  }

  return (
    <>
      <Typography variant='h4' className='text-center' style={{marginBottom: '2rem'}}>Welcome to<br/>PGA SKINS!</Typography>
      <Typography variant='body2' className='text-center'>Please enter the user name you want others to see when viewing a skins match created by you:<br/><br/></Typography>
      <TextField autoComplete='off' variant='outlined' placeholder='User Name' fullWidth
        value={username} onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={updateUsername} disabled={username.length < 3 || username.length > 20} style={{marginTop: '1rem'}} variant='contained'>SUBMIT</Button>
    </>
  );
}

export default WelcomeScreen;