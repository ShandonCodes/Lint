import {GET_ACCOUNTS, PARSE_ACCOUNTS} from '../actions/types';

const initialState = {
    rawAccounts: [],
    displayElements: []
};

export default function(state = initialState, action) {
    switch(action.type){
         case GET_ACCOUNTS:
            return {
                    ...state,
                    rawAccounts: action.payload.rawAccounts
                };
         case PARSE_ACCOUNTS:
            return {
                    ...state,
                    displayElements: action.payload.displayElements
                };
         default:
            return state; 
    }
}
