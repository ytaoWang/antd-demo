import React from 'react';
import { Redirect } from 'react-router-dom';
import {Logout} from './UserService';

export default function LogoutPage(props) {
    Logout();
    return (<Redirect to='/main'/>);
  }