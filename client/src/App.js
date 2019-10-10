import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div className="App">
       { this.props.currentUser ? <Logout /> : <Login />}
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
