import React, { Component } from 'react';
import DoctorList from '../components/DoctorList';
import DoctorCard from '../components/DoctorCard';

class DoctorContainer extends Component {

    render() {
        return (
            <div>
                <DoctorList /> 
                <DoctorCard /> 

            </div>
        )
    }
}

export default DoctorContainer; 