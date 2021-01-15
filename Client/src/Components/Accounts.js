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
import { getAccounts, parseAccounts } from '../actions/accountActions';
import {CardHeader, Typography} from '@material-ui/core';

class AccountHolder extends Component{

    componentDidMount(){
        this.props.getAccounts(this.props.uid); 
      }

    componentDidUpdate(){
        if (this.props.rawAccounts.length > 0 && this.props.displayElements.length === 0)
            this.props.parseAccounts(this.props.rawAccounts); 
      }

    render(){
        if (!this.props.displayElements || this.props.displayElements.length === 0){
            return (<>

                <CardHeader title="Accounts" titleTypographyProps={{variant:'h4'}}>
                    <Typography variant="h2" gutterBottom>
                        Accounts
                    </Typography>
                </CardHeader>
            </>)
        }
        return (<>
            <CardHeader title="Accounts" titleTypographyProps={{variant:'h4'}}>
                <Typography variant="h2" gutterBottom>
                    Accounts
                </Typography>
            </CardHeader>
        
            
            <Table striped>
                <tbody>
                    <tr>
                        <th>Name</th>
                    </tr>
                    {this.props.displayElements}
                </tbody>
            </Table>
        </>);
    }
} 
const mapStateToProps = state => ({
        rawAccounts: state.account.rawAccounts,
        displayElements: state.account.displayElements,
        uid: state.login.uid
});
export default connect(mapStateToProps, {getAccounts, parseAccounts})(AccountHolder);
