import React from 'react';
import { PlaidLink } from 'react-plaid-link';
import axios from 'axios';
import {connect} from 'react-redux';
import {generateLinkTransactions} from '../actions/linkActions';

class Link extends React.Component {
  render (){
    return (
        <PlaidLink
          token={this.props.link_token}
          onSuccess={ (public_token) => this.props.generateLinkTransactions(public_token,this.props.uid)}
        >
          Connect a bank account
        </PlaidLink>
      );
  }
  
};

const mapStateToProps = state => ({
        link_token: state.login.link_token,
        uid: state.login.uid,
        transactions: state.link.transactions
});
export default connect(mapStateToProps, {generateLinkTransactions})(Link);

