import React from 'react';

const Signup = () => {

    return (
        <div>
            Sign Up
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
                value="Sign Up"
            />
        </form>

        </div>
    )
}

export default Signup; 