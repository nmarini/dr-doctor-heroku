import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
import { getDoctors } from './actions/doctors.js';
import UserProfile from './containers/UserProfile.js';
import CompleteDoctorList from './containers/CompleteDoctorList.js';
import HomePage from './containers/HomePage.js';
import NavBar from './components/NavBar.js';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser();
    this.props.getDoctors();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/userProfile' component={UserProfile} />
          <Route exact path='/completeDoctorList' component={CompleteDoctorList} />
        </div>
      </Router>
    );
  }
}

export default connect(null, { getCurrentUser, getDoctors })(App);
