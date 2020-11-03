import { GENERATE_LINK_TRANSACTIONS} from '../actions/types';

const initialState = {
    transactions: []
};

export default function(state = initialState, action) {
    switch(action.type){
         case GENERATE_LINK_TRANSACTIONS:
            return {
                    ...state,
                    transactions: action.payload.transactions
                };
        /* case GENERATE_LINK_TOKEN:
            return {
                    ...state,
                    link_token: action.payload.link_token
                };
         */
         default:
            return state; 
    }
}
