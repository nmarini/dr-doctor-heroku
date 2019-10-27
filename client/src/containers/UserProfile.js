import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserCard from '../components/UserCard'
import DoctorList from '../components/DoctorList'
import { getCurrentUser } from '../actions/currentUser'


class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }
    componentDidMount() {
        this.props.getCurrentUser();
        this.setState({loaded:true})

    }

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

    render() {
        return (
            <div>
                
                <UserCard />
                {this.props.currentUser ? 
                    <div>
                        <h3>{this.props.currentUser.name}'s Profile'</h3>
                        {
                            this.props.doctors ? 
                                <DoctorList doctors={this.userDoctors()} />
                                
                            :
                                null 
                        }

                        
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

export default connect(mapStateToProps, {getCurrentUser})(UserProfile); 