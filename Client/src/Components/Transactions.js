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
import {connect} from 'react-redux';
import {parseTransactions} from '../actions/transactionActions'

const containerStyle = {
    border: '5px solid green',

}

class Transactions extends Component{

    componentDidUpdate(props){
        if (this.props.rawTransactions.length > 0 && this.props.displayElements.length  === 0)
            this.props.parseTransactions(this.props.rawTransactions);
    }

    render(){
        if (!this.props.displayElements || this.props.displayElements.length === 0){
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
                        {this.props.displayElements}
                    </tbody>
                </Table>
                
            </div>
        </>);
    }
} 

const mapStateToProps = state => ({
        displayElements: state.transaction.displayElements,
        rawTransactions: state.login.transactions
});

export default connect(mapStateToProps, { parseTransactions })(Transactions);
