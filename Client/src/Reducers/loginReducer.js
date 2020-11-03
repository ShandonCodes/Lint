import { LOGIN_USER, GENERATE_LINK_TOKEN, GET_TRANSACTIONS, PARSE_TRANSACTIONS} from '../actions/types';

const initialState = {
    uid: '',
    isLoggedin: false,
    link_token: '',
    transactions: [],
    displayElements: []
};

export default function(state = initialState, action) {
    switch(action.type){
         case LOGIN_USER:
            return {
                    ...state,
                    uid: action.payload.uid,
                    isLoggedin: action.payload.isLoggedin
                };
         case GENERATE_LINK_TOKEN:
            return {
                    ...state,
                    link_token: action.payload.link_token
                };
         case GET_TRANSACTIONS:
            return {
                    ...state,
                    transactions: action.payload.transactions
                };
         case PARSE_TRANSACTIONS:
            return {
                    ...state,
                    displayElements: action.payload.displayElements
                };
         default:
            return state; 
    }
}
