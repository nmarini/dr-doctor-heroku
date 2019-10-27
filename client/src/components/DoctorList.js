import React, { Component } from 'react';
import Doctor from '../components/Doctor';

class DoctorList extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            selectedDoctor: false,
        }
    }
    

    listDoctors = () => 
        this.props.doctors.map(doctor => 
        <li key={doctor.uid}>Dr. {doctor.profile.last_name} <button value={doctor.uid} onClick={this.handleClick}>give me the news!</button></li>)

    handleClick = event => {
        let doctorUid = event.target.value;
        let doctor = this.props.doctors.find(doctor => doctorUid === doctor.uid )
        this.setState({
            selectedDoctor: doctor
        })
        
    }

    render() {
        return (
            <div>
                <h4 className="doctorContainerCard">
                    {this.state.selectedDoctor ? <Doctor doctor={this.state.selectedDoctor}/> : 'Select a Doctor'}
                </h4>
                <div className="doctorContainerList">
                    {this.listDoctors()}
                </div>
            </div>
        )
    }
}

export default DoctorList; 