import React from 'react';

const Login = () => {
    return (
        <form onSubmit={this.handleSubmit}>
            <input 
                type="text"
                placeholder="email"
                onChange={this.handleChange}
                name="email"
                value={}
            />
            <input 
                type="text"
                placeholder="password"
                onChange={this.handleChange}
                name="password"
                value={}
            />
            <input 
                type="submit"
                value="Log In"
            />
        </form>

    )
}

export default Login;