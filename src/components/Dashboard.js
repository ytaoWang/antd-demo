import React from 'react';
import {Route} from 'react-router';
import { Layout} from 'antd';
import 'antd/dist/antd.css';
import MenuLayoutContainer from '../containers/MenuLayoutContainer'
import SidebarLayout from "./SidebarLayout";

const { Header, Content, Footer} = Layout;

const DashboardLayout = ({children, ...rest}) => {
    return (
        <Layout>
        <Header style={{ position: 'fixed', zIndex:1, width: '100%'}}>
          <MenuLayoutContainer/>
        </Header>
        <Content className="side-layout-background" style={{ padding: '0 50px', marginTop: 100, minHeight: 480}}>
        
        <Layout className="site-layout-background">
        <SidebarLayout/>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>{children}</Content>
        </Layout>

        </Content>
        <Footer style={{ textAlign: 'center'}}>@个人所有</Footer>
        </Layout>
        );
}


const Dashboard = ({component: Component, ...rest}) => {  
  console.log("rest:" + rest);
    return (  
      <Route {...rest} render={matchProps => (  
        <DashboardLayout> 
            <Component {...matchProps} />  
        </DashboardLayout>  
      )} />  
    )  
  };

  export default Dashboard;
    