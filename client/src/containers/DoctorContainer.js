import React, { Component } from 'react';
import { connect } from 'react-redux';
import DoctorList from '../components/DoctorList';

class DoctorContainer extends Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         exposeList: false,
    //         loaded: false
    //     }
    // }

    // showList = (doctors) => <DoctorList doctors={doctors}/> 

    // handleClick = () => {
    //     let newState = this.state.exposeList ? false : true
    //     this.setState({
    //         exposeList: newState
    //     })
    // }

    // componentDidMount() {
    //     this.setState({
    //         loaded: true
    //     })
    // }



    render() {
        return (
            <div>
                {/* {this.props.doctors === null ? 'still loading...' : this.showList(this.props.doctors)} */}
                {this.props.doctors === null ? 'still loading...' : <DoctorList doctors={this.props.doctors}/>}
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