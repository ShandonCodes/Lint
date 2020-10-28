import React, {Component} from 'react';
import Header from "./Header";
import AccountHolder from "./Accounts";
import Transactions from "./Transactions";
import {Col, Container, Row} from 'reactstrap';

class Landing extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }

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

export default Landing;