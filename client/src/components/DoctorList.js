import React, { Component } from 'react';
import DoctorCard from '../components/DoctorCard';

class DoctorList extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            selectedDoctor: null,
        }
    }
    
    componentDidMount() {
        
    }
    

    listDoctors = () => this.props.doctors.map(doctor => {
        let profile = doctor.profile || null
        if (profile !== null) {
            return <li key={doctor.uid}>Dr. {doctor.profile.last_name} <button value={doctor.uid} onClick={this.handleClick}>give me the news!</button></li>
        } else {
            return <li key={doctor.id}>Dr. {doctor.last_name} <button value={doctor.id} onClick={this.handleClick}>give me the news!</button></li>
        }
        
    })

    handleClick = event => {
        let doctorUid = parseInt(event.target.value);
        let doctor = this.props.doctors.find(doctor => doctorUid === doctor.uid || doctorUid === doctor.id)
        this.setState({
            selectedDoctor: doctor
        })
        
    }

    render() {
        return (
            <div>
                <h4 className="doctorContainerCard">
                    {this.state.selectedDoctor === null ? 'Select a Doctor' : <DoctorCard doctor={this.state.selectedDoctor}/>}
                </h4>
                <div className="doctorContainerList">
                    {this.listDoctors()}
                </div>
            </div>
        )
    }
}

export default DoctorList; 