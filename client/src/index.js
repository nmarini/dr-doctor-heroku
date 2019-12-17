import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
require('dotenv').config();

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/*", function(req, res) {
      res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
  }
  
  else {
    app.use(express.static(path.join(__dirname, '/client/public')));
    app.get("/*", function(req, res) {
      res.sendFile(path.join(__dirname, "./client/public/index.html"));
    });
  }