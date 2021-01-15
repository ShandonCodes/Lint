import React, {  Component } from "react";
import axios from 'axios';
import {Redirect} from "react-router";
import { connect } from 'react-redux';
import { loginUser, generateLinkToken, getTransactions} from '../actions/loginActions';
import { Button, Container, Grid} from '@material-ui/core';

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
    }

    componentDidUpdate(){
        if (this.props.uid !== ''){

            this.props.generateLinkToken(this.props.uid);
            this.props.getTransactions(this.props.uid);
        }
    }

    render(){
        if (this.props.isLoggedin){
            return (<Redirect to={{pathname: "/overview", state: {uid: this.state.uid}}}/>)
        }
            
        return (
            <Container>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
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

                    <Button variant="contained" color="primary" onClick={this.submitForm}>Login</Button>
                </Grid>
            </Container>
            // <form onSubmit={this.submitForm}>
                
            // </form>
        )
    }
}

const mapStateToProps = state => ({
    uid: state.login.uid,
    isLoggedin: state.login.isLoggedin,
    link_token: state.login.link_token,
    transactions: state.login.transactions
});
export default connect(mapStateToProps, { loginUser, generateLinkToken, getTransactions})(Login);
