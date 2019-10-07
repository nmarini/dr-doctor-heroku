import React, { Component } from 'react';

class Login extends Component {

    constructor() {
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = () => {
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                </form>
            </div>
        )
    }
};

export default Login;