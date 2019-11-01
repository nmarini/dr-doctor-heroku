import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from  '../actions/currentUser.js';

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            name: '',
            password: ''
        }
    } 

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.signup(this.state)
    }

    render() {
        return (
            <div>
                Sign Up
                <form onSubmit={this.handleOnSubmit}>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    />
                   
                    <input 
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                  
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                    />
                   
                    <input 
                        type="submit"
                        className="button"
                        value="Sign Up"            
                    />

                </form>
    
            </div>
        )
    }
}

export default connect(null, { signup })(Signup); 