import React from 'react';
import { connect } from 'react-redux';

const UserCard = ({currentUser}) => {

    const doctorCount = () => (
        currentUser.doctors.legnth
    )

    return (
        <div>
            {doctorCount() !== 0 ? 
                <p>{currentUser.name}, you have {doctorCount()} Doctor{doctorCount() > 1 ? 's in your list.': ' in your list.'}</p>
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