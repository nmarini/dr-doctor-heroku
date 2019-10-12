import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Login from './Login.js';
import Logout from './Logout.js';
import Signup from './Signup.js';


const NavBar = ({currentUser}) => {

    const loggedIn = () => (
        <div className="row">
            <div className="column"><NavLink to='/'>Home Page</NavLink></div>
            <div className="column"><NavLink to='/userProfile'>User's Profile</NavLink></div>
            <div className="column"><NavLink to='/completeDiagnosisList'>Complete Diagnosis List</NavLink></div>
        </div>
    )

        return (
            <div className="NavBar">
                <div>
                    { currentUser ? <strong>Welcome, {currentUser.name} </strong> : ""}
                    <div>{ currentUser ? <Logout/> : <Login/>}</div>
                </div>
                {currentUser ? loggedIn() : ""}
            </div>
        )
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(NavBar); 