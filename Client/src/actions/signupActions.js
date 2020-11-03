import { SIGNUP_USER } from './types';
import axios from 'axios';

export const signupUser = (email, password) => dispatch => {
    axios.post('http://192.168.86.119:3001/register',{email, password})
         .then(res => {
                if (res.status === 200){
                    dispatch({
                            type: SIGNUP_USER,
                            payload: {formCompleted: true}
                        })
                }
    });
}
