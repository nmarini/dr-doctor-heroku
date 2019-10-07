import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
import Login from './components/Login.js'


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
