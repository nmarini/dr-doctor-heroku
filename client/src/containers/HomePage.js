import React, { Component } from 'react';
import DiagnosisContainer from './DiagnosisContainer';
import DiagnosisForm from '../components/DiagnosisForm';

class HomePage extends Component {

    render() {
        return (
            <div>
                HomePage
                <DiagnosisForm />
                <DiagnosisContainer />

            </div>
        )
    }
}

export default HomePage; 