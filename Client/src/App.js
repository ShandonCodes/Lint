import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Login";
import SignUp from "./Signup";
// import Landing from "./Landing";
import Landing from "./Components/Landing";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import store from './Store';

function App() {
  return (
  <Provider store={store}> 
  <Router>
    <div className="App">

        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/overview" render={(props) => <Landing {...props}/>}/>
          </Switch>
        </div>
      </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
