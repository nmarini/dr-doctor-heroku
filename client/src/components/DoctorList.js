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
    

    listDoctors = () => this.props.doctors.map(doctor => 
        <button key={doctor.uid} value={doctor.uid} onClick={this.handleClick}>Dr. {doctor.profile.last_name}</button>
        )

    handleClick = event => {
        let doctorUid = event.target.value 
        let doctor = this.props.doctors.find(doctor => doctor.uid === doctorUid)
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