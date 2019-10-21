const doctorsReducer = (state = null, action) => {
    switch (action.type) {
        case 'ADD_DOCTORS':
            return action.doctors
        default:
            return state 
    }
}

export default doctorsReducer