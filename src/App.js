import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'; 
import Dashboard from "./components/Dashboard";

import LoginPageContainer from "./containers/LoginPageContainer";
import LogoutPage from "./components/LogoutPage"
import MainPage from './components/MainPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/baidu">
            <Redirect to="http://www.baidu.com"/>
          </Route>
          <Dashboard path="/settings" component={MainPage} />
          <Dashboard path="/login" component={LoginPageContainer} />
          <Dashboard path="/logout" component={LogoutPage} />
          <Dashboard path="/" component={MainPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
