import React, { Component } from 'react';
import DoctorCard from '../components/DoctorCard';

class DoctorList extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            selectedDoctor: null,
            doctors: this.props.doctors
        }
    }

    handleClick = event => {
        let doctor = event.target.value 
        this.setState = {
            selectedDoctor: doctor
        }
    }

    render() {
        return (
            <div>
                {this.state.selectedDoctor ? <DoctorCard doctor={this.state.selectedDoctor}/> : 'Select a Doctor'}
                {this.state.props.doctors.map(doctor => <li key={doctor.id} value={doctor}>{doctor.name}</li>)}
            </div>
        )
    }
}

export default DoctorList; 