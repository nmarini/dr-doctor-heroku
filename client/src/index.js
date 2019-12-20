import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
require('dotenv').config();

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));

serviceWorker.register();