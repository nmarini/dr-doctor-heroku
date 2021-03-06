import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Login from './Login.js';
import Logout from './Logout.js';
import Signup from './Signup.js';



const NavBar = ({currentUser}) => {

    const loggedIn = () => {
        return <div className="NavRow">
            <div className="NavColumn"><NavLink to='/'><button className="nav-button">Home Page</button></NavLink></div>
            <div className="NavColumn"><NavLink to='/userProfile'><button className="nav-button" >User's Profile</button></NavLink></div>
            <div className="NavColumn"><NavLink to='/doctorList'><button className="nav-button" >Doctor List</button></NavLink></div>
            <div className="NavColumn"><Logout/></div>
        </div>
    }

        return (
            <div className="NavBar">
                <div>
                    { currentUser ? <strong>Welcome, {currentUser.name}! </strong> : null}
                    <div>{ currentUser ? null : <div><Login/>-or-<Signup/></div>}</div>
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