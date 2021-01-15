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
import {Toolbar, AppBar, Iconbutton, Typography, Button, IconButton} from '@material-ui/core'

class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
            <div>
                <AppBar position="static">
                    <Toolbar style={{display: 'flex'}}>
                        <Typography variant="h5">
                            Lint
                        </Typography>
                        <Link/>
                    </Toolbar>
                </AppBar>
            </div>
        </>
        );
    }
} 
const mapStateToProps = state => ({
    });
export default connect(mapStateToProps, {},)(Header);
