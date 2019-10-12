import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserCard from '../components/UserCard.js'
import DiagnosisContainer from './DiagnosisContainer.js'


class UserProfile extends Component {

    render() {
        return (
            <div>
                User Profile
                <UserCard />
                <DiagnosisContainer />

            </div>
        )
    }
}

export default UserProfile; 