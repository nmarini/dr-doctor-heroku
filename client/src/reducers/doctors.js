const doctorsReducer = (state = [ doctors = [], userDoctors = [] ], action) => {
    switch (action.type) {
        case 'ADD_DOCTORS':
            return (
                Object.assign({}, state, {
                    doctors: action.doctors
                })
            )

        case 'SAVE_DOCTOR':
            return (
                Object.assign({}, state.userDoctors, {
                    doctor: action.doctor
                })
            )
        default:
            return state 
    }
}

export default diagnosesReducer