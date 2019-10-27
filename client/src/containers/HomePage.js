import React, { Component } from 'react';
import { connect } from 'react-redux';
import DoctorContainer from './DoctorContainer';
import DoctorSearch from '../components/DoctorSearch';
import Signup from '../components/Signup';

class HomePage extends Component {

    ShowSearch = () => (
        <div>
            <DoctorSearch />
            <DoctorContainer userId={this.props.currentUser.id}/>
        </div>
    )

    render() {
        return (
            <div>
                
                {this.props.currentUser ? this.ShowSearch() : <div>-or- <Signup /></div>}

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