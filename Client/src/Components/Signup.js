import React, {  Component } from "react";
import axios from "axios";
import {Redirect} from "react-router";
import {connect} from 'react-redux';
import {signupUser} from '../actions/signupActions'; 
import { Button, Container, Grid} from '@material-ui/core';

class SignUp extends Component{

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
        });
    }

    updatePassword(event){
        this.setState({
            password: event.target.value
        });
    }

    submitForm(){
        this.props.signupUser(this.state.email, this.state.password);
    }

    render(){
            if (this.props.formCompleted){
                return (<Redirect to="/sign-in" />)
            }
            return (
                <>
                <Container maxWidth='sm'>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                            <h3>Sign Up</h3>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.updateEmail}/>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.updatePassword}/>
                            </div>
                            <Button variant="contained" color="primary" onClick={this.submitForm}>Create Account</Button>
                </Grid>
            </Container>
            </>
        )
    }
}

const mapStateToProps = state => ({
        formCompleted: state.signup.formCompleted
});

export default connect(mapStateToProps, { signupUser })(SignUp);
