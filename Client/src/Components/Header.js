import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import Link from './Link';
import {connect} from 'react-redux';

class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Lint</NavbarBrand>
                    <Collapse isOpen={true} navbar>
                        <Nav className="mr-auto" navbar>
                        </Nav>
                    </Collapse>
                    <Link/>
                </Navbar>
            </div>
        );
    }
} 
const mapStateToProps = state => ({
    });
export default connect(mapStateToProps, {},)(Header);
