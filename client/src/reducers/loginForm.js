const initialState = {
    email: "",
    password: ""
}

const loginFormReduer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_LOGIN_FORM":
            return action.formData
        default: 
            return state
    }

}

export default loginFormReduer;