import React, { Component } from 'react';
import { connect } from 'react-redux';
import CryptoJS from "react-native-crypto-js";


class DiagnosisForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sex: this.props.currentUser.sex,
            birthdayYear: this.props.currentUser.birthday_year,
            symptoms: [],
            token: ""
        }
    }

    // componentDidMount() {

    //     const hashedCredentials = CryptoJS.AES.encrypt(`f7D3NkZo95Wdr4A6R`, 'https://authservice.priaid.ch/login').toString();
    //     const computedHashString = hashedCredentials.toString(CryptoJS.enc.Base64)
         
    //         fetch("https://authservice.priaid.ch/login?format=json", {
	//             method: "POST",
	//             headers: {
	//         	"Host": "authservice.priaid.ch",
	//         	"Authorization": `Bearer ${process.env.REACT_APP_TOKEN}`
	//         }
    //     }).then(response => console.log(response))
     
    //     // Token created here: 
    //     // https://authservice.priaid.ch/docs.html
    // }

    componentDidMount() { 
        fetch("https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms?format=json&language=en-gb", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
                "x-rapidapi-key": `9727d28617msh6ffacb1f937a09fp1e5600jsne238b2a6d151`
            }
        })
        .then(response => response.json()).then(res => console.log(res))
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