import React from 'react';
import { PlaidLink } from 'react-plaid-link';
import axios from 'axios';
import {connect} from 'react-redux';
import {generateLinkTransactions} from '../actions/linkActions';
import { getAccounts, parseAccounts } from '../actions/accountActions';
import { getTransactions } from '../actions/loginActions';
import { parseTransactions } from '../actions/transactionActions';

class Link extends React.Component {
  render (){
    return (
        <PlaidLink
          style={{ marginRight: "0", marginLeft: "auto"}}
          token={this.props.link_token}
          onSuccess={ (public_token) => 
            {this.props.generateLinkTransactions(public_token,this.props.uid, (uid) => {
              this.props.getAccounts(uid, (accounts) => {this.props.parseAccounts(accounts)})

              this.props.getTransactions(this.props.uid, (transactions) => {
                this.props.parseTransactions(transactions);
              })
          })

            
        }}>
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
export default connect(mapStateToProps, {generateLinkTransactions, getAccounts, parseAccounts, getTransactions, parseTransactions})(Link);

