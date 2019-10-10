import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import NavBar from './componenets/NavBar.js'


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div className="App">
       <NavBar />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
