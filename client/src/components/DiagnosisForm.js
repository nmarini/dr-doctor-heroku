import React, { Component } from 'react';
import { connect } from 'react-redux';

class DiagnosisForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sex: this.props.currentUser.sex,
            birthdayYear: this.props.currentUser.birthday_year,
            symptoms: []
        }
    }

    handleOnSubmit = () => {

    }

    handleOnChange = event => {

    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input 
                    type="text"  
                    onChange={this.handleOnChange}
                    name="sex"
                    value={this.state.sex}
                />
                <input 
                    type="text"  
                    onChange={this.handleOnChange}
                    name="birthdayYear"
                    value={this.state.birthdayYear}
                />
                
            </form>
        )
    }
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(DiagnosisForm); 