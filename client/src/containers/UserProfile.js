import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserCard from '../components/UserCard'
import DoctorList from '../components/DoctorList'
import { getCurrentUser } from '../actions/currentUser'


class UserProfile extends Component {

    componentDidMount() {
        this.props.getCurrentUser();
    }

    render() {
        return (
            <div>
                <h3>{this.props.currentUser.name}'s Profile'</h3>
                <UserCard />
                {this.props.currentUser ? <DoctorList doctors={this.props.currentUser.doctors} /> :  'still loading...'}
                    {/* {this.props.currentUser ? console.log(this.props): console.log(null)} */}
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