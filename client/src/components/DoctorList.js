import React, { Component } from 'react';
import { connect } from 'react-redux';
import Doctor from '../components/Doctor';
import { getCurrentUser } from '../actions/currentUser'

class DoctorList extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            selectedDoctor: false,
            userDocs: this.props.userDoctors
        }
    }

    componentDidMount() {
        this.props.getCurrentUser();
    }

    listDoctors = (doctors) => (
        doctors.map(doctor => 
            <div className="underlined" key={doctor.uid}><h6>Dr. {doctor.profile.last_name}</h6><p><button className="button" value={doctor.uid} onClick={this.handleClick}>give me the news!</button></p></div>
        )
    )

    listUserDoctors = (doctors) => (
        doctors.map(doctor => 
            <div className="underlined" key={doctor.uid}><h6>Dr. {doctor.profile.last_name}</h6><p><button className="button" value={doctor.uid} onClick={this.handleClick}>give me the news!</button><button className="warning-button" value={doctor.id} onClick={this.handleDelete}>remove</button></p></div>
        )
    )

    handleDelete = (event) => {
        const id = parseInt(event.target.value)
        const updatedDocs = this.state.userDocs.filter(doc => (
                doc.id !== id
            ))
        this.setState({
            userDocs: updatedDocs
        })
        fetch(`http://localhost:3000/api/v1/doctors/${id}`, {
            credentials: "include",
            method: "DELETE"
        })        
    }

    handleClick = event => {
        let doctorUid = event.target.value;
        let doctor = this.props.doctors.find(doctor => doctorUid === doctor.uid )
        this.setState({
            selectedDoctor: doctor
        })
        
    }

    render() {
        return (
            <div className="row">
                <div className="column">
                    <div className="doctorContainerList">
                        {this.props.userDoctors ? 
                            this.listUserDoctors(this.state.userDocs)
                        : 
                            this.listDoctors(this.props.allDoctors)}
                    </div>
                </div>
                <div className="column">
                    <div className="doctorContainerCard">
                        {this.state.selectedDoctor ? <Doctor key={this.state.selectedDoctor.uid} note={this.state.selectedDoctor.user_note} doctor={this.state.selectedDoctor}/> : <p className="underlined">Selected Doctor will Display here</p>}
                    </div>
                </div>              
            </div>
        )
    }
}

const mapStateToProps = ({currentUser, doctors}) => {
    return {
        currentUser,
        doctors
    }
}

export default connect(mapStateToProps, {getCurrentUser})(DoctorList);

