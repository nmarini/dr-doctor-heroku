import React, { Component } from 'react';
import DoctorCard from '../components/DoctorCard';

class DoctorList extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            selectedDoctor: null,
        }
    }
    
    

    listDoctors = () => {
        return this.props.doctors.map(doctor => <button key={doctor.uid} value={doctor} onClick={this.handleClick}>Dr. {doctor.profile.last_name}</button>)
    }

    handleClick = event => {
        let doctor = event.target 
        this.setState = {
            selectedDoctor: doctor
        }
        
    }

    render() {
        return (
            <div>
                <h4 className="doctorContainerCard">
                    {this.state.selectedDoctor ? <DoctorCard doctor={this.state.selectedDoctor}/> : 'Select a Doctor'}
                </h4>
                <div className="doctorContainerList">
                    {this.listDoctors()}
                </div>
            </div>
        )
    }
}

// const mapStateToProps = ({doctors}) => {
//     return {
//         doctors
//     }
// }

export default DoctorList; 