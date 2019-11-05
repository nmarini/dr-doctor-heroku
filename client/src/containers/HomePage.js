import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {

    render() {
        return (
            <div>
                {this.props.currentUser ? 
                    <div className="text-color">
                        <h5 className="component-title">
                            Home
                        </h5>
                            <p>
                                Please use the navigation bar to checkout Doctors, your Profile, or to Log Out
                            </p>
                            <p className="italic-p">
                                <b>Dr. Doctor</b> contains a list of Doctors, from <b>Boston Massachusetts</b>, with varying backgrounds.
                                <br/>
                                Users are able to view Doctor information, and save Doctors to their User Profile with an optional note included to view at a later time.
                                <br/>
                                Users are able to search for Doctors by last name, specialty, or picking a Doctor from the complete list of Doctors.
                            </p>
                    </div> 
                : 
                    <p>Please Sign Up or Log In</p>}

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