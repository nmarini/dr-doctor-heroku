import React, { Component } from 'react';
import { connect } from 'react-redux';

class DiagnosisForm extends Component {

    // constructor() {
    //     this.state = {
    //         sex: currentUser.sex,
    //         birthdayYear: currentUser.birthday_year
    //     }
    // }

    handleOnSubmit = () => {

    }

    handleOnChange = event => {

    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input 
                    type="text"  
                    onChange={this.handleChange}
                    name="sex"
                    value={this.props.currentUser.sex}
                />
                <input 
                    type="text"  
                    onChange={this.handleChange}
                    name="birthdayYear"
                    value={this.props.currentUser.birthday_year}
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