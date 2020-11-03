import {PARSE_TRANSACTIONS} from '../actions/types';
const initialState = {
    displayElements: []
};

export default function(state = initialState, action) {
    switch(action.type){
         case PARSE_TRANSACTIONS:
            return ({
                    ...state,
                    displayElements: action.payload.displayElements
                });
         default:
            return state; 
    }
}
