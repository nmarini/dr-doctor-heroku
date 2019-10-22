import React, { Component } from 'react';
import { connect } from 'react-redux';
import DoctorList from '../components/DoctorList';

class DoctorContainer extends Component {

    showList = (doctors) => {
        return doctors !== null ? <DoctorList doctors={doctors}/> : "loading..."
        console.log(doctors)
    }

    render() {
        return (
            <div>
                {this.showList(this.props.doctors)}
            </div>
        )
    }
}

const mapStateToProps = ({doctors}) => {
    return {
        doctors
    }
}

export default connect(mapStateToProps)(DoctorContainer); 