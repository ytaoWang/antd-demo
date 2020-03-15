import React from 'react';
import 'antd/dist/antd.css';
import '../styles/Login.css';
import { Form, Input, Button, Checkbox } from 'antd';
import {Auth} from "./UserService";
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'


export default class LoginPage extends React.Component {
   //声明属性
   static propTypes = {
        onLogin: PropTypes.func.isRequired,
        login: PropTypes.bool.isRequired
    }

  componentDidMount() {
    const onLogin = this.props.onLogin;
    onLogin(false);
  }

  render() {
    console.log("loginpage-render-0");
    const onLogin = this.props.onLogin;
    const login = this.props.login;
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 6,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };
    console.log("loginpage-render-1");

      const onFinish = values => {
        console.log('Success:', values);
        if(Auth(values.username, values.password, values.remember))
        {
          onLogin(true);
        }
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
      console.log("loginpage-render-2,login:" + login);
      if(login) {
        return (<Redirect to='/main'/>);
      } else
      {
    return (
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="用户名"
                name="username"
                rules={[
                  {
                    required: true,
                    message: '请输入用户名',
                  },
                ]}
              >
                <Input />
              </Form.Item>
        
              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入密码',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
        
              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
        
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  提交
                </Button>
              </Form.Item>
            </Form>
          );
      }
    }
}

