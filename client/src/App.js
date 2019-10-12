import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
import UserProfile from './containers/UserProfile.js';
import CompleteDiagnosisList from './containers/CompleteDiagnosisList.js';
import HomePage from './containers/HomePage.js';
import NavBar from './components/NavBar.js';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/userProfile' component={UserProfile} />
          <Route exact path='/completeDiagnosisList' component={CompleteDiagnosisList} />
        </div>
      </Router>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
