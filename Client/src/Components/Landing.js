import React, {Component} from 'react';
import Header from "./Header";
import AccountHolder from "./Accounts";
import Transactions from "./Transactions";
import {Col, Row} from 'reactstrap';
import Link from './Link';
import {connect} from 'react-redux';
import {Container, Paper, Grid, Card, Divider} from '@material-ui/core';

class Landing extends Component{

    render(){
        return (
            <>
            
            <Container>
            <Paper>
                <Header/>
                <Grid
                    container
                    direction="row"
                    justify="flex-center"
                    alignItems="flex-start"
                    spacing={3}
                >
                <Grid item>
                    <Card variant="outlined">
                        <AccountHolder></AccountHolder>
                    </Card>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={8}>
                    <Card variant="outlined">
                        <Transactions></Transactions>
                    </Card>
                </Grid>

                </Grid>
            </Paper>
            
            </Container>
        
            </>);
    }
} 

const mapStateToProps = state => ({

    });
export default connect(mapStateToProps, {})(Landing);
