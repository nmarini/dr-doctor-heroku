import React, { Component } from 'react';
import DoctorCard from '../components/DoctorCard';

class DoctorList extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            selectedDoctor: '',
            doctors: this.props.doctors
        }
    }

    listDoctors = (doctors) => {
        doctors.map(doctor => <li key={doctor.id} value={doctor}>{doctor.name}</li>)
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
                {this.props.doctors ? this.listDoctors(this.state.doctors) : `should be null: ${console.log(this.props.doctors)}`}
            </div>
        )
    }
}

const mapStateToProps = ({doctors}) => {
    return {
        doctors
    }
}

export default DoctorList; 