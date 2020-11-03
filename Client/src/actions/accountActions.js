import React from 'react';
import {GET_ACCOUNTS, PARSE_ACCOUNTS} from './types';
import axios from 'axios';

export const getAccounts = (uid) => dispatch => {
    axios.post('http://192.168.86.119:3001/accounts',{uid})
         .then(res => {
                if (res.status === 200){
                    dispatch({
                            type: GET_ACCOUNTS,
                            payload: {rawAccounts: res.data.accounts}
                        })
                }
    });
}

export const parseAccounts = (rawAccounts) => dispatch => {
        let elements = rawAccounts.map(rawAccount => (
            <tr>
                <td>
                    {rawAccount.item_id}
                </td>
            </tr>
        ));

        dispatch({
                type: PARSE_ACCOUNTS,
                payload: {displayElements: elements}
            });
};
