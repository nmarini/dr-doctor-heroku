import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserCard from '../components/UserCard'
import DoctorContainer from './DoctorContainer'
import { getCurrentUser } from '../actions/currentUser'


class UserProfile extends Component {

    componentDidMount() {
        this.props.getCurrentUser();
    }

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

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps, {getCurrentUser})(UserProfile); 