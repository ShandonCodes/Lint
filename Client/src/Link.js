import React from 'react';
import { PlaidLink } from 'react-plaid-link';
import axios from 'axios';

class Link extends React.Component {
    constructor(props){
        super(props);
        // console.log(props);
        this.onSuccess = this.onSuccess.bind(this);
    }

onSuccess(token, metadata){
    // send token to server
    console.log(this.props);
    axios.post('http://192.168.86.119:3000/get_access_token',{
        public_token: token,
        uid: this.props.uid
    }).then((res) => {
        // console.log(res);
        if (res.status === 200){
            console.log(res.data);
        }
        else{
            alert("Error");
        }
        
    }).catch(err => console.log(err))
  };

  
  render (){
    return (
        <PlaidLink
          token={this.props.token}
          onSuccess={this.onSuccess}
        >
          Connect a bank account
        </PlaidLink>
      );
  }
  
};
export default Link;

