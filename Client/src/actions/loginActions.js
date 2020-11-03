import { LOGIN_USER, GENERATE_LINK_TOKEN, GET_TRANSACTIONS} from './types';
import axios from 'axios';

export const loginUser = (email, password, callback) => dispatch => {
    axios.post('http://192.168.86.119:3001/login',{email, password})
         .then(res => {
                if (res.status === 200){
                    dispatch({
                            type: LOGIN_USER,
                            payload: {uid: res.data.id, isLoggedin: true}
                        })
                }
    });
}

export const generateLinkToken = (uid) => dispatch => {
    axios.post('http://192.168.86.119:3001/create_link_token',{uid})
         .then(res => {
                if (res.status === 200){
                    dispatch({
                            type: GENERATE_LINK_TOKEN,
                            payload: {link_token: res.data.link_token}
                        })
                }
    });
}

export const getTransactions = (uid) => dispatch => {
    axios.post('http://192.168.86.119:3001/transactions',{uid})
         .then(res => {
                if (res.status === 200){
                    dispatch({
                            type: GET_TRANSACTIONS,
                            payload: {transactions: res.data.transactions}
                        })
                }
    });
}
