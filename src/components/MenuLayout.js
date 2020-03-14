import React from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import {DownOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {IsLogin, GetUser, Logout } from "./UserService";

export default class MenuLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'login': IsLogin(),
            'showed': false,
        };
    }

    componentDidMount() {
        this.setState({
            login: IsLogin(),
        });
    }

    handleLogout()
    {
        Logout();
        this.setState({
            login: IsLogin(),
        });
    }

    render() {
        const isLogin = this.state.login;
        let loginTxt;

        if(!isLogin) {
                loginTxt = (
                <Menu.Item key="3">

                    <Link to="/login">登录</Link>
                </Menu.Item>);
        } else {
            const menu = (
                <Menu>
                    <Menu.Item>
                        <Link to="/settings">设置</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/logout" onClick={() => this.handleLogout()}>退出</Link>
                    </Menu.Item>
                </Menu>
            );
            loginTxt =  (
                <Menu.Item key="3">
                <Dropdown overlay={menu}>
                <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <span className="nav-text">{GetUser()}</span>
                <DownOutlined/>
                </span>               
                </Dropdown>
               
                </Menu.Item>
                );
        }

        return (
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px', textAlign:'right'}}
          >
        <Menu.Item key="1"><span>菜单1</span></Menu.Item>
        <Menu.Item key="2"><span>菜单2</span></Menu.Item>  
        {loginTxt}
        </Menu>
    );
    }
}
