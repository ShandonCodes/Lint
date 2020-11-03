import React, {Component} from 'react';
import Header from "./Header";
import AccountHolder from "./Accounts";
import Transactions from "./Transactions";
import {Col, Container, Row} from 'reactstrap';
import Link from './Link';
import {connect} from 'react-redux';

class Landing extends Component{

    render(){
        return (
            <>
            <Header></Header>
            <Container fluid={true}>
                {/* <Row>
                    <Col>
                    <Header></Header>
                    </Col>
                
                </Row> */}
                
                <Row>
                    <Col xs="auto">
                        <AccountHolder></AccountHolder>
                    </Col>
                    <Col>
                        <Transactions></Transactions>
                    </Col>
                </Row>
                
            </Container>
        
            </>);
    }
} 

const mapStateToProps = state => ({

    });
export default connect(mapStateToProps, {})(Landing);
