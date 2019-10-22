import React from 'react';

const Signup = () => {

    const handleChange = (event) => {

    }

    const handleSubmit = () => {

    }

    return (
        <div>
            Sign Up
            <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Name"
                onChange={handleChange}
                name="name"
                // value={}
            />
            <input 
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                // value={}
            />
            <input 
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                // value={}
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