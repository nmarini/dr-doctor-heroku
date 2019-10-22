// synchronous action creators
export const addDoctors = doctors => {
    return {
        type: "ADD_DOCTORS",
        doctors
    }

};

export const saveDoctor = (currentUser, doctor) => {
    return {
        type: "SAVE_DOCTOR",
        doctor,
        currentUser
    }
};

// asynchronous action creators
export const getDoctors = () => {

    let api_key = `${process.env.REACT_APP_API_KEY}`; 
    let resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=100&user_key=' + api_key;

    return dispatch => {
        return fetch(resource_url
            , {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            } 
        }).then(res => res.json())
            .then( doctors => {
                    if (doctors.error) {
                        alert(doctors.errors)
                    } else {
                        dispatch(addDoctors(doctors.data))
                    }
                }
            )
    }
}

