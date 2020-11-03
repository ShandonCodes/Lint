import React from 'react';
import { PARSE_TRANSACTIONS } from './types';
import axios from 'axios';

export const parseTransactions = (rawTransactions) => dispatch => {

    let displayElements = rawTransactions.map(rawTransaction => (
        <tr>
            <td>
                {rawTransaction.date}
            </td>
            <td>
                {rawTransaction.name}
            </td>
            <td>
                {rawTransaction.amount}
            </td>
        </tr>
    ));
    dispatch({
            type: PARSE_TRANSACTIONS,
            payload: {displayElements}
    });
}
