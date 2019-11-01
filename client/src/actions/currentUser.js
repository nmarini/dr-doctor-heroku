// synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }

};

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

// asynchronous action creators
export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials) 
        }).then(res => res.json())
            .then( user => {
                    if (user.error) {
                        alert(user.errors)
                    } else {
                        dispatch(setCurrentUser(user))
                    }
                }
            )
    }
}

export const signup = credentials => {
    return dispatch => {
        const userInfo = {
            user: credentials
        }
        return fetch("http://localhost:3000/api/v1/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo) 
        }).then(res => res.json())
            .then( user => {
                    if (user.error) {
                        alert(user.errors)
                    } else {
                        dispatch(setCurrentUser(user))
                    }
                }
            )
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(clearCurrentUser());
        return fetch("http://localhost:3000/api/v1/logout", {
            credentials: "include",
            method: "DELETE"

        })
    }
}

export const getCurrentUser = () => {
    return dispatch => { 
        return fetch("http://localhost:3000/api/v1/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => res.json())
            .then( user => {
                    if (user.error) {
                        console.log("No one is logged in")
                    } else {
                        dispatch(setCurrentUser(user))
                    }
                }
            )
    }
}