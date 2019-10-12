import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Login from './Login.js';
import Logout from './Logout.js';
import Signup from './Signup.js';


const NavBar = ({currentUser}) => {

        return (
            <div className="NavBar">
                <NavLink to='/'>Home Page</NavLink>
                {/* { currentUser ? <strong>Welcome, {currentUser.name} </strong> : ""}
                { currentUser ? <Logout/> : <Login/>} */}
            </div>
        )
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(NavBar); 