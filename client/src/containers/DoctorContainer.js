import React, { Component } from 'react';
import { connect } from 'react-redux';
import DoctorList from '../components/DoctorList';

class DoctorContainer extends Component {

    render() {
        return (
            <div>
                <DoctorList doctors={this.props.doctors}/> 
            </div>
        )
    }
}

const mapStateToProps = ({doctors}) => {
    return {
        doctors
    }
}

export default connect(mapStateToProps)(DoctorContainer); 