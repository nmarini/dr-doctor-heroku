import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser.js';
import { NavLink } from 'react-router-dom';

const Logout = ({ logout }) => {
    

    return (

        <NavLink to='/'><button className="button" onClick={logout}>Log Out</button></NavLink>
    )
}

export default connect(null, { logout })(Logout); 