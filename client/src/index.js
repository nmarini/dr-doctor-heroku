import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const reducer = combineReducers({
    
})

const composeEnhancer = window.__Redux_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));

 