import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import diagnosesReducer from './reducers/diagnoses.js';
import currentUserReducer from './reducers/currentUserReducer.js'
import thunk from 'redux-thunk';

const reducer = combineReducers({
    diagnoses: diagnosesReducer,
    currentUser: currentUserReducer
})

const composeEnhancer = window.__Redux_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;