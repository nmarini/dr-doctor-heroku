// synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }

};

// asynchronous action creators
export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3000")
    }
}