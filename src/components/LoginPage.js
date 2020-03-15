import React from 'react';
import 'antd/dist/antd.css';
import '../styles/Login.css';
import { Form, Input, Button, Checkbox, Alert } from 'antd';
import {Auth} from "./UserService";
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'


export default class LoginPage extends React.Component {
   //声明属性
   static propTypes = {
        onLogin: PropTypes.func.isRequired,
    }

    constructor(props) {
      super(props);
      this.state = {
        msg: "1"
      };
    }

  componentDidMount() {
    const onLogin = this.props.onLogin;
    onLogin(false);
  }

  handleSubmit(e) {
    let username, pwd, remember;
    username = e.username;
    pwd = e.password;
    remember = e.remember;
 
    Auth(username, pwd, remember).then((res) => {
      if(res)
      {
        this.setState({msg:'ok'});
        console.log("msg: ok");
      } else{
        console.log("msg: fail");
        this.setState({msg:'fail'});
      }
    });
    console.log('username:', username, ", pwd:", pwd, ",remember:", remember);
  }

  render() {
    console.log("loginpage-render-0");
    const onLogin = this.props.onLogin;
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
        Auth(values.username, values.password, values.remember).then((res) => {
          console.log("user:", values.username, "pwd:", values.password, "remember:", values.remember, "res:", res);
          onLogin(res);
          if(res)
          {
            this.setState({msg:'ok'});
            console.log("msg: ok");
          } else{
            console.log("msg: fail");
            this.setState({msg:'fail'});
          }
        });
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

      let errmsg;

      errmsg = "";
      if(this.state.msg === "fail") {
        errmsg = (<div style={{ marginBottom:'20px'}}> <Alert
          message="Error"
          description="用户名或密码错误."
          type="error"
          showIcon
        /></div>);
      }

      if(this.state.msg === 'ok') {
        return (<Redirect to='/main'/>);
      } else
      {
    return  (
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              
            >
              {errmsg}
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

