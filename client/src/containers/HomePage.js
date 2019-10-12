import React, { Component } from 'react';
import DiagnosisContainer from './DiagnosisContainer.js;';
import DiagnosisForm from '../components/DiagnosisForm.js;';

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