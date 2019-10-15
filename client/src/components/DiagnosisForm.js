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

    componentDidMount() {
        fetch(`https://healthservice.priaid.ch/symptoms?token=${process.env.REACT_APP_TOKEN}&language=en-gb`)
        .then(resp => resp.json())
        .then(symp => console.log(symp))

        // Token created here:
        // https://authservice.priaid.ch/docs.html
    }

    handleOnSubmit = () => {
 
    }

    handleOnChange = event => {

    }

    render() {
        return (
            <div>
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
                
            </div>
        )
    }
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(DiagnosisForm); 