import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

import '../styles/HomePage.css';
import Login from './Login';

const { Header, Content, Footer} = Layout;


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'login': localStorage.getItem("token"),
            'showed': false,
        };
    }

    componentDidMount() {
        this.setState({
            login: localStorage.getItem('token'),
        });
    }

    render() {
        const isShowed = this.state.showed;
        const isLogin = this.state.login;
        let loginTxt;
        let showedTxt;

        if(!isLogin) {
                loginTxt = (
                <Menu.Item key="1" onClick={() => this.setState({showed:true})}>
                    <span className="nav-text">登录</span>
                </Menu.Item>);
        } else {
            loginTxt =  (
                <Menu.Item key="1">
                <span className="nav-text">localStorage.getItem("user")</span>
                </Menu.Item>
                );
        }

        if(isShowed) {
            showedTxt = <Login/>;
        }

        return (
        <Layout>
        <Header style={{ position: 'fixed', zIndex:1, width: '100%'}}>          
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px', textAlign:'right'}}
      >
    {loginTxt}
      </Menu>

        </Header>
        <Content className="side-layout-background" style={{ padding: '0 50px', marginTop: 64, minHeight: 480}}>
          <div style={{padding:24}}>
           {showedTxt}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center'}}>@个人所有</Footer>
        </Layout>
        );
    }
}