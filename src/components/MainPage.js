import React from 'react';
import { Redirect } from 'react-router-dom';
import {IsLogin, GetUser} from './UserService';


export default class Main extends React.Component {
    render() {
        if(IsLogin()) {
        return (<h1>Hello,World:{GetUser()}.</h1>);
        } else {
            return (<Redirect to='/login'/>);
        }
    }
}