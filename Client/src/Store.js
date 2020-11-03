import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

const initialState = {};

const middleware = [thunk];

const composeEnhancers = composeWithDevTools({
});

const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middleware)
));

export default store;
