import React, { Component } from "react";
import axios from 'axios';
import Link from './Link';
import {Table, Container} from 'reactstrap';

class Landing extends Component{
  constructor(props){
    super(props);
    this.state = this.props.location.state;

    this.gatherTransactions = this.gatherTransactions.bind(this);
    this.generateElements = this.generateElements.bind(this);
    // console.log(props);
  }

  componentDidMount(props){
    this.generateLinkToken();
    this.gatherTransactions();
    this.setState({token: '', transactions: [], displayElements: []});
    // console.log(this.state);
  }

  generateElements(){
    let elements = this.state.transactions.map(transaction => (
      <tr>
        <td>{transaction.date}</td>
        <td>{transaction.name}</td>
        <td>{Number(transaction.amount).toFixed(2)}</td>
      </tr>
    ));

    this.setState({displayElements: elements})
  }

  updateTransactions(data){
    this.setState({transactions: data});
  }

  gatherTransactions(){
    axios.post('http://192.168.86.119:3001/transactions',{
      uid: this.state.uid
  }).then((res) => {
      // console.log(res);
      if (res.status === 200){
          this.setState({transactions: res.data.transactions});
          this.generateElements();
      }
      else{
          alert("Error");
      }
      
  }).catch(err => console.log(err))
  }

  
generateLinkToken(){

  axios.post('http://192.168.86.119:3001/create_link_token',{
      uid: this.state.uid
  }).then((res) => {
      // console.log(res);
      if (res.status === 200){
          this.setState({token: res.data.link_token});
      }
      else{
          alert("Error");
      }
      
  }).catch(err => console.log(err))
}

    render(){
      if (!this.state.displayElements || this.state.displayElements.length === 0){
        return (
              <>
              <Container>
              <h1>Landing</h1>
                <Link token= {this.state.token} uid={this.props.location.state.uid}></Link>
                <h3>No transactional data</h3>
                </Container>
              </>
          )
      }
      else{
        return (
        <>
        <Container>
          <h3>Landing for user: {this.props.location.state.uid}</h3> 
          
          <Table striped>
            <tbody>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Amount</th>
            </tr>
            {this.state.displayElements}
            </tbody>
          </Table>

          <Link token= {this.state.token} uid={this.props.location.state.uid}></Link>
          </Container>
        </>
        );
      }
    }
}

export default Landing;
