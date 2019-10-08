import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserCard from './components/UserProfile.js'
import DiagnosisDiagnosisContainer from './containers/DiagnosisDiagnosisContainer.js'


class UserProfile extends Component {

    render() {
        return (
            <div>

                <UserCard />
                <DiagnosisContainer />

            </div>
        )
    }
}

export default UserProfile; 