import React from 'react';
import { connect } from 'react-redux';

const UserCard = ({currentUser}) => {

    const doctorCount = () => (
        currentUser.doctors.legnth
    )

    return (
        <div>
            <h1>{currentUser.name}'s Profile</h1>
            {doctorCount() === 0 ? 
                <p>You have {doctorCount()} Doctor{doctorCount() > 1 ? 's in your list.': ' in your list.'}</p>
            : 
                null}
        </div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(UserCard); 