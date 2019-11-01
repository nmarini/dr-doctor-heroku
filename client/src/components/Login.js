import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm, clearLoginForm } from  '../actions/loginForm.js'
import { login } from  '../actions/currentUser.js'

const Login = ({clearLoginForm, updateLoginForm, login, loginForm}) => {
    
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
        login(loginForm);
        clearLoginForm();
    }

    return (
        <div>
        Log In
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={loginForm.email}
            />
            <input 
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value={loginForm.password}
            />
            <input 
                type="submit"
                className="button"
                value="Log In"
            />
        </form>
        </div>

    )
}

const mapStateToProps = ({loginForm}) => {
    return {
        loginForm
    }
}

export default connect(mapStateToProps, { clearLoginForm, updateLoginForm, login })(Login);