import React, { Component } from 'react';
import { connect } from 'react-redux';
import DoctorCard from './DoctorCard';
import { getCurrentUser } from '../actions/currentUser';

class Doctor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userNote: this.props.doctor.user_note ? this.props.doctor.user_note : '',
            currentNote: this.props.doctor.user_note,
            justSaved: false

        }
    }

    componentDidMount() {
        this.props.getCurrentUser();
    }

    createDoctor = (event) => {
        event.preventDefault();
            let doctorInfo = {
                last_name: this.props.doctor.profile.last_name,
                uid: this.props.doctor.uid,
                user_note: this.state.userNote,
                user_id: this.props.currentUser.id
            }

            this.setState({userNote: this.state.currentNote, currentNote: '', justSaved: true})
            return fetch("http://localhost:3000/api/v1/doctors", {
                    credentials: "include",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(doctorInfo) 
            })
    }

    updateDoctor = (event) => {
        event.preventDefault();
        let doctorInfo = {
            last_name: this.props.doctor.profile.last_name,
            uid: this.props.doctor.uid,
            user_note: this.state.currentNote
        }
        this.setState({userNote: this.state.currentNote, currentNote: ''})
        return fetch(`http://localhost:3000/api/v1/doctors/${this.props.doctor.id}`, {
                credentials: "include",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(doctorInfo) 
        })
    }


    handleChange = (event) => {
        this.setState({
            currentNote: event.target.value
        })
    }

    updateForm = () => (
        <form onSubmit={this.updateDoctor} >
                <label>
                    Update Note:
                    <input 
                        type="text"
                        name="user_note"
                        placeholder="Add Note (optiona)"
                        value={this.state.currentNote }
                        onChange={this.handleChange}
                    />
                </label>
            
            <input type="submit" value="Update Profile" /> 

            </form> 
    )

    createForm = () => (
        <form onSubmit={this.createDoctor} >
                <label>
                    Create Note:
                    <input 
                        type="text"
                        name="user_note"
                        placeholder="Add Note (optiona)"
                        value={this.state.currentNote}
                        onChange={this.handleChange}
                    />
                </label>
            
            <input type="submit" value="Save Profile" /> 

            </form> 
    )

    ownsDoctor = (doctor) => {
         
        let result = this.props.currentUser.doctors.find(doc => doctor.uid === doc.uid)
        return result ? true : false
    }

    render() {

        return (

            <div>

                <DoctorCard key={this.props.doctor.uid} doctor={this.props.doctor} />
                {this.state.userNote ?
                <h5>Note: {this.state.userNote}</h5>
                :
                null}
                {this.state.justSaved ?
                <p className="success">Saved to profile!</p>
                :
                    null}
    
            
                {this.ownsDoctor(this.props.doctor) ? 
                    this.updateForm() 
                : 
                    this.createForm()}
            </div>
        )
    }
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps, {getCurrentUser})(Doctor);  