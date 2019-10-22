import React, { Component } from 'react';
import { connect } from 'react-redux';
import DoctorList from '../components/DoctorList';
import DoctorSearch from '../components/DoctorSearch';
import Signup from '../components/Signup';

class HomePage extends Component {

    ShowSearch = () => (
        <div>
            <DoctorSearch />
            <DoctorList />
        </div>
    )

    render() {
        return (
            <div>
                HomePage

                {this.props.currentUser ? this.ShowSearch() : <Signup />}

                

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