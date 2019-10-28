import React, { Component } from 'react';
import { connect } from 'react-redux';
import DoctorList from './DoctorList';

class DoctorSearch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lastName: "",
            searchType: "",
            doctors: []
        }
    }

    componentDidMount() { 
        
    }

    ownsDoctor = (doctor) => {
         
        let result = this.props.currentUser.doctors.find(doc => doctor.uid === doc.uid)
        return result ? true : false
    }
    
    allDoctors = () => (
        this.props.doctors.map(doctor => {
            if (this.ownsDoctor(doctor)) {
                let doc = this.props.currentUser.doctors.find(dr => dr.uid === doctor.uid)
                doctor.user_note = doc.user_note
                return doctor
            } else {
                return doctor
            }
        })
    )

    aphabetizeDocs = () => (

       this.allDoctors().sort((a, b) => {
            if (a.profile.last_name < b.profile.last_name) 
                return -1
            if (a.profile.last_name > b.profile.last_name)
                return 1
            return 0
        })
    )

    sortBySpecialty = () => {
        let specialties = []
        this.props.doctors.map(doc => {
            doc.specialties.map(spec => {
                specialties.push(spec.name)
            })
        }) 

        const uniqSpec = [...new Set(specialties)].sort()
        return uniqSpec.map((spec, index) => <option key={index} value={spec}>{spec}</option>)      
    }


    handleOnSubmit = (event) => {
        event.preventDefault();

    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleOnSubmit}>
                <input 
                    type="text"  
                    onChange={this.handleOnChange}
                    name="lastName"
                    value={this.state.lastName}
                />
                <input 
                    type="submit"
                    value="search"
                />                
            </form>

            <label> 
                Sort by Specialty:
                <select name="searchType" value={this.state.searchType} onChange={this.handleOnChange}>
                {this.props.doctors !== null ?
                this.sortBySpecialty()
                :
                'still loading...'}
                </select>
            </label>
            <div>
                <button value="alphabetical" name="searchType" onClick={this.handleButton}>Sort by Name</button>
                <br/>


            </div>
            {this.props.doctors !== null && this.props.currentUser !== null ?
                <DoctorList allDoctors={this.aphabetizeDocs()} />
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

export default connect(mapStateToProps)(DoctorSearch); 