import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserCard from '../components/UserCard'
import DoctorContainer from './DoctorContainer'


class UserProfile extends Component {

    render() {
        return (
            <div>
                User Profile
                <UserCard />
                <DoctorContainer />

            </div>
        )
    }
}

export default UserProfile; 