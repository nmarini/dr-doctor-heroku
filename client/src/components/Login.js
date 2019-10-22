import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from  '../actions/loginForm.js'
import { login } from  '../actions/currentUser.js'

const Login = ({updateLoginForm, login, loginForm}) => {
    
    const handleChange = event => {
        const {name, value } = event.target;
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedFormInfo) 
    }

    const handleSubmit = event => {
        event.preventDefault();
        login(loginForm)
    }

    return (
        <div>
        Log In
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="email"
                onChange={handleChange}
                name="email"
                value={loginForm.email}
            />
            <input 
                type="text"
                placeholder="password"
                onChange={handleChange}
                name="password"
                value={loginForm.password}
            />
            <input 
                type="submit"
                value="Log In"
            />
        </form>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login);