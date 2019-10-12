import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserCard from '../components/UserCard'
import DiagnosisContainer from './DiagnosisContainer'


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