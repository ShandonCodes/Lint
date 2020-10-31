import React, {  Component } from "react";
import axios from 'axios';
import {Redirect} from "react-router";
import { connect } from 'react-redux';
import { loginUser } from './actions/loginActions';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {email: '',
                      password: ''
        };

        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.submitForm = this.submitForm.bind(this);

    }

    updateEmail(event){
        this.setState({
            email: event.target.value
        }, () => console.log(this.state));
    }

    updatePassword(event){
        this.setState({
            password: event.target.value
        }, () => console.log(this.state));
    }

    submitForm(event){
        event.preventDefault();

        this.props.loginUser(this.state.email, this.state.password);

        console.log(this.props);
    }

    render(){
        //if (this.props.isLoggedin === true) 
        //    return (<Redirect to={{pathname: "/overview", state: {uid: this.state.uid}}}/>)
            
        return (
            <form onSubmit={this.submitForm}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.updateEmail}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.updatePassword}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    uid: state.login.uid,
    isLoggedin: state.login.isLoggedin
});
export default connect(mapStateToProps, { loginUser })(Login);
