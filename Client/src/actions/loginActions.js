import { LOGIN_USER } from './types';
import axios from 'axios';

export const loginUser = (email, password) => dispatch => {
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
