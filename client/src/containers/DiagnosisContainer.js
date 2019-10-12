import React, { Component } from 'react';
import DiagnosisList from '../components/DiagnosisList';
import DiagnosisCard from '../components/DiagnosisCard';

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