import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import linkReducer from './linkReducer';
import transactionReducer from './transactionReducer';
import accountReducer from './accountReducer';

export default combineReducers({
    login: loginReducer,
    signup: signupReducer,
    link: linkReducer,
    transaction: transactionReducer,
    account: accountReducer
});
