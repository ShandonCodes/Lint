import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Row,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, 
    Container,
    Table
  } from 'reactstrap';
  import axios from 'axios';

const containerStyle = {
    border: '5px solid green',

}

class Transactions extends Component{
    constructor(props){
        super(props);

        this.state = {transactions: [], rawTransactions: []}

        // this.setState({})

        this.generateTransactionEntries = this.generateTransactionEntries.bind(this);
        this.gatherTransactions = this.gatherTransactions.bind(this);
    }

    gatherTransactions(){
        axios.post('http://192.168.86.119:3001/transactions',{
          uid: '5f6f74819c722c01406e793c'
      }).then((res) => {
          // console.log(res);
          if (res.status === 200){
              this.setState({rawTransactions: res.data.transactions});
              this.generateTransactionEntries();
          }
          else{
              alert("Error");
          }
          
      }).catch(err => console.log(err))
      }

    componentDidMount(props){
        this.generateTransactionEntries();
        this.gatherTransactions();
      }

    render(){
        if (!this.state.displayElements || this.state.displayElements.length === 0){
            return (<>
                <div style={containerStyle}>
                        <h1>Transactions</h1>
                </div>
            </>)
        }
        return (<>
            <div style={containerStyle}>
                    <h1>Transactions</h1>
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
                
            </div>
        </>);
    }

    generateTransactionEntries(){
        let elements = this.state.rawTransactions.map(rawTransaction => (
            <tr>
                <td>
                    {rawTransaction.date}
                </td>
                <td>
                    {rawTransaction.name}
                </td>
                <td>
                    {rawTransaction.amount}
                </td>
            </tr>
          ));
      
          this.setState({displayElements: elements})
    }
} 

export default Transactions;
