import React, { Component } from 'react';
import { connect } from 'react-redux';
import DoctorList from './DoctorList';

class DoctorSearch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lastName: "",
            searchType: "",
            chosenDocs: false
        }
    }

    specialtyDoctors = () => (
        this.alphabetizeDocs().filter(doc => {
            let specialties = doc.specialties.map(spec => spec.name)
            if (specialties.includes(this.state.searchType)) 
            return doc
        })
    )

    namedDoctors = () => (
        this.alphabetizeDocs().filter(doc => doc.profile.last_name.toLowerCase() === this.state.lastName.toLowerCase())
    )

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

    alphabetizeDocs = () => (

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

    handleSortSubmit = (event) => {
        event.preventDefault();

        this.setState({
            chosenDocs: this.specialtyDoctors()
        })

    }

    handleNameSubmit = (event) => {
        event.preventDefault();

        this.setState({
            chosenDocs: this.namedDoctors(),
            lastName: ''
        })
        console.log(this.state)
        console.log(this.state.chosenDocs)
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // handleThis = () => {
    //     // this.setState({
    //     //     chosenDocs: this.namedDoctors()
    //     // })
    //     console.log(this.state)
    //     console.log(this.namedDoctors())
    // }

    render() {
        return (
            <div>
            <form onSubmit={this.handleNameSubmit}>
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
            {/* <button onClick={this.handleThis} value="click"/> */}
            
            <form onSubmit={this.handleSortSubmit}>
            <label> 
                    Sort by Specialty:
                    <select name="searchType" value={this.state.searchType} onChange={this.handleOnChange}>
                    {this.props.doctors !== null ?
                    this.sortBySpecialty()
                    :
                    'still loading...'}
                    </select>
                </label>
                <input 
                    type="submit"
                    value="sort!"

                />
            </form>
            <div>

            </div>
            {this.props.doctors !== null && this.props.currentUser !== null ?
                this.state.chosenDocs ? 
                    <DoctorList key={this.state.chosenDocs} allDoctors={this.state.chosenDocs} />
                :
                    <DoctorList key={this.state.chosenDocs} allDoctors={this.alphabetizeDocs()} />
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