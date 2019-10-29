import React, { Component } from 'react';
import { connect } from 'react-redux';
import DoctorSearch from '../components/DoctorSearch';
import Signup from '../components/Signup';

class HomePage extends Component {

    render() {
        return (
            <div>
                
                {this.props.currentUser ? <p>Please use the navigation bar to checkout Doctors, your Profile, or to Log Out</p> : <p>Please Sign Up or Log In</p>}

            </div>
        )
    }
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(HomePage); 