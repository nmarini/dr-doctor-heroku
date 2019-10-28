import React, { Component } from 'react';
import { connect } from 'react-redux';
import DoctorSearch from '../components/DoctorSearch';
import Signup from '../components/Signup';

class HomePage extends Component {

    render() {
        return (
            <div>
                
                {this.props.currentUser ? <DoctorSearch /> : <div>-or- <Signup /></div>}

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