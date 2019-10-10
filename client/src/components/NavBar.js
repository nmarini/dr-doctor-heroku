import React from 'react';
import { connect } from 'react-redux';
import Login from './Login.js';
import Logout from './Logout.js';
import Signup from '.Signup.js';
import UserProfile from './containers/UserProfile.js;';
import HomePage from './containers/HomePage.js;';
import CompleteDiagnosisList from './containers/CompleteDiagnosisList.js;';





const NavBar = ({currentUser}) => {

        return (
            <div>

            </div>
        )
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(NavBar); 