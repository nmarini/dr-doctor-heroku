import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import diagnosesReducer from './reducers/diagnoses.js';
import currentUserReducer from './reducers/currentUser.js';
import updateLoginFormReducer from './reducers/loginForm.js';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    diagnoses: diagnosesReducer,
    currentUser: currentUserReducer,
    loginForm: updateLoginFormReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;