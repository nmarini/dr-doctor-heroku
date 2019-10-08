import React, { Component } from 'react';
import DiagnosisForm from './components/DiagnosisForm.js;';
import DiagnosisContainer from './containers/DiagnosisContainer.js;';

class HomePage extends Component {

    render() {
        return (
            <div>

                <DiagnosisForm />
                <DiagnosisContainer />

            </div>
        )
    }
}

export default HomePage; 