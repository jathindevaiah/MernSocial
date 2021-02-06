import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//This would be our initial state
const initialState = {};

//thunk is our only middleware
const middleware = [thunk];

//Create a store
//Since we are using dev tools extension we can use compose with dev tools
const store = createStore(
                rootReducer, 
                initialState, 
                composeWithDevTools(applyMiddleware(...middleware)));


export default store;
                