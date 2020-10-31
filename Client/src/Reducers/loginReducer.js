import { LOGIN_USER } from '../actions/types';

const initialState = {
    uid: '',
    isLoggedin: false
};

export default function(state = initialState, action) {
    switch(action.type){
         case LOGIN_USER:
            return {
                    ...state,
                    uid: action.payload.uid,
                    isLoggedin: action.payload.isLoggedin
                };
         default:
            return state; 
    }
}
