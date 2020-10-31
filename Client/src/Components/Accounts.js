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
    border: '5px solid pink'

}

class AccountHolder extends Component{
    constructor(props){
        super(props);

        this.state = {accounts: ['Accoutn #1', 'Account #2', 'Account #3'], rawAccounts: []}

        // this.setState({})

        this.generateAccoutEntries = this.generateAccoutEntries.bind(this);
        this.gatherAccountEntries = this.gatherAccountEntries.bind(this);
    }

    componentDidMount(props){
        this.generateAccoutEntries();
        this.gatherAccountEntries();
      }

    render(){
        if (!this.state.displayElements || this.state.displayElements.length === 0){
            return (<>

                    <div style={containerStyle}>
                        <h1>Accounts</h1>
                    </div>
            </>)
        }
        return (<>
            <div style={containerStyle}>
                        <h1>Accounts</h1>
                    <Table striped>
                        <tbody>
                            <tr>
                                <th>Name</th>
                            </tr>
                            {this.state.displayElements}
                        </tbody>
                    </Table>
            </div>
        </>);
    }

    gatherAccountEntries(){
        axios.post('http://192.168.86.119:3001/accounts',{
          uid: '5f6f74819c722c01406e793c'
      }).then((res) => {
          // console.log(res);
          if (res.status === 200){
              this.setState({rawAccounts: res.data.accounts});
              this.generateAccoutEntries();
          }
          else{
              alert("Error");
          }
          
      }).catch(err => console.log(err))
      }

    // componentDidMount(props){
    //     this.generateTransactionEntries();
    //     this.gatherTransactions();
    //   }

    generateAccoutEntries(){
        let elements = this.state.rawAccounts.map(rawAccount => (
            <tr>
                <td>
                    {rawAccount.item_id}
                </td>
            </tr>
          ));
      
          this.setState({displayElements: elements})
    }
} 

export default AccountHolder;
