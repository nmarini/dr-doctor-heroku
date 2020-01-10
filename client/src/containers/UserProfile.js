import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from '../components/UserCard';
import DoctorList from '../components/DoctorList';
import { getCurrentUser, clearCurrentUser } from '../actions/currentUser';
import { NavLink } from 'react-router-dom';

class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.currentUser.name,
            email: this.props.currentUser.email,
            password: '',
            exposeForm: false,
            exposeDelete: false
        }
    }

    componentDidMount() {
        this.props.getCurrentUser();
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        const userInfo = {
            user: {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password

            }
        }

        fetch(`/api/v1/users/${this.props.currentUser.id}`, {
                credentials: "include",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userInfo) 
            }).then( res => {
                    if (res.status !== 200) {
                        alert('Please complete entire form!')
                    } else {
                        this.props.getCurrentUser()
                    }
                }
        )
        this.setState({exposeForm: !this.state.exposeForm})
    }

    handleDelete = () => {
        this.props.clearCurrentUser();
        fetch(`/api/v1/users/${this.props.currentUser.id}`, {
            credentials: "include",
            method: "DELETE"

        })
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    showForm = () => {
        this.setState({
            exposeForm: !this.state.exposeForm
        })
    }

    showDelete = () => {
        this.setState({
            exposeDelete: !this.state.exposeDelete
        })
    }

    updateForm = () => (
        <form onSubmit={this.handleOnSubmit}>
            <input 
                type="text"
                className="round-textbox"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleOnChange}
            />
            
            <input 
                type="text"
                className="round-textbox"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleOnChange}
            />
            
            <input 
                type="password"
                className="round-textbox"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleOnChange}
            />
            
            <input 
                type="submit"
                className="edit-button"
                value="Update Account"            
            />

        </form>
    )

    userDoctors = () => (
        this.props.currentUser.doctors.map(doctor => {
            
            let userDoc = this.props.doctors.find(doc => (
                doc.uid === doctor.uid
            ))
            userDoc.id = doctor.id 
            userDoc.user_note = doctor.user_note
            return userDoc
            
        })

    )

    doctorCount = () => {
        let count = 0;
        this.props.currentUser.doctors.forEach(doc => count += 1)
        return count 
    }

    render() {
        return (
            <div>
                <div>
                    <h5 className="component-title">Profile Page</h5>
                    <UserCard doctorCount={this.doctorCount()} />
                <div>
                    <button className="edit-button" onClick={this.showForm}>{this.state.exposeForm ? "Hide Edit Form" : "Show Edit Form"}</button>
                </div>
                {this.state.exposeForm ? 
                    this.updateForm()
                :
                    null }
                <div>

                    {this.state.exposeDelete ? <NavLink to="/"><button className="warning-button" onClick={this.handleDelete}>Delete Your Account</button></NavLink> : null }
                </div>
                </div>
            
                
                {this.props.doctors ? 
        
                    <div>
                        <h6 className="component-title">Your saved Doctors:</h6>
                            <DoctorList userDoctors={this.userDoctors()} />  
                    </div>
                :  
                'still loading...'}
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

export default connect(mapStateToProps, {getCurrentUser, clearCurrentUser})(UserProfile); 