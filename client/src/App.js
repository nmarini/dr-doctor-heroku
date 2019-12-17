import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
import { getDoctors } from './actions/doctors.js';
import UserProfile from './containers/UserProfile.js';
import DoctorSearch from './containers/DoctorSearch.js';
import HomePage from './containers/HomePage.js';
import NavBar from './components/NavBar.js';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser();
    this.props.getDoctors();
  }

  render() {
    return (
      <Switch>
        <div className="App">
          <div className="main-title">
            <h1>Dr. Doctor</h1>
            <p className="italic-p">Helping you find the doctor you need</p>
          </div>
            <NavBar />
            {this.props.currentUser ? 
            <div>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/userProfile' render={() => (<UserProfile key={this.props.currentUser.doctors.length}/>)} />
              <Route exact path='/doctorList' component={DoctorSearch} />
            </div>
            :
            <div>
              <Route exact path='/' component={HomePage} />
            </div>}
        </div>
      </Switch>
    );
  }
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser, getDoctors })(App);
