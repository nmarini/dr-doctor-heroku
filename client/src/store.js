import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import doctorsReducer from './reducers/doctors.js';
import currentUserReducer from './reducers/currentUser.js';
import updateLoginFormReducer from './reducers/loginForm.js';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    doctors: doctorsReducer,
    currentUser: currentUserReducer,
    loginForm: updateLoginFormReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;