import React, { Component } from 'react';
import DiagnosisList from './components/DiagnosisList.js;';
import DiagnosisCard from './components/DiagnosisCard.js;';

class DiagnosisContainer extends Component {

    render() {
        return (
            <div>
                <DiagnosisList />
                <DiagnosisCard />

            </div>
        )
    }
}

export default DiagnosisContainer; 