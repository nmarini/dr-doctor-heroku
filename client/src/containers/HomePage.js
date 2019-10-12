import React, { Component } from 'react';
import { connect } from 'react-redux';
import DiagnosisContainer from './DiagnosisContainer';
import DiagnosisForm from '../components/DiagnosisForm';
import Signup from '../components/Signup';

class HomePage extends Component {

    ShowForm = () => (
        <div>
            <DiagnosisForm />
            <DiagnosisContainer />
        </div>
    )

    render() {
        return (
            <div>
                HomePage

                {this.props.currentUser ? this.ShowForm() : <Signup />}

                

            </div>
        )
    }
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(HomePage); 