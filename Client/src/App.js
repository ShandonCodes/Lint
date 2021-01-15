import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import Landing from "./Components/Landing";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import store from './Store';
import {connect} from 'react-redux';
import { Component } from 'react';



class App extends Component {

  constructor(props){
    super(props);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  isLoggedIn(){
    if (this.props.isLoggedIn){
      return true
    }
    return false;
  }

  render () {
    return (
      // <Provider store={store}> 
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/overview" render={(props) => (!this.isLoggedIn() ? (<Redirect to="/sign-in"/>) : (<Landing {...props}/>))}/>
              </Switch>
            </div>
          </div>
        </div>
        </Router>
        // </Provider>
      );
  }
  
}

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedin
})

export default connect(mapStateToProps, {})(App);
