import { SIGNUP_USER } from '../actions/types';

const initialState = {
    formCompleted: false
};

export default function(state = initialState, action) {
    switch(action.type){
         case SIGNUP_USER:
            return {
                    ...state,
                    formCompleted: action.payload.formCompleted
                };
         default:
            return state; 
    }
}
