import React, { Component } from 'react';
import DoctorSearch from '../components/DoctorSearch';

class CompleteDoctorList extends Component {

    render() {
        return (
            <div>   
                <h5>Doctor List</h5>

                <DoctorSearch />

            </div>
        )
    }
}

export default CompleteDoctorList; 