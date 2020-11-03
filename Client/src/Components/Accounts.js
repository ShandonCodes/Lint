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
const containerStyle = {
    border: '5px solid pink'

}

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
                            {this.props.displayElements}
                        </tbody>
                    </Table>
            </div>
        </>);
    }
} 
const mapStateToProps = state => ({
        rawAccounts: state.account.rawAccounts,
        displayElements: state.account.displayElements,
        uid: state.login.uid
});
export default connect(mapStateToProps, {getAccounts, parseAccounts})(AccountHolder);
