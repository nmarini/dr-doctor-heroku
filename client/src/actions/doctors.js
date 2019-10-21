// synchronous action creators
export const addDoctors = doctors => {
    return {
        type: "ADD_DOCTORS",
        doctors
    }

};

export const SaveDoctor = doctor => {
    return {
        type: "SAVE_DOCTOR",
        doctor
    }

};

// asynchronous action creators
export const getDoctors = () => {

    let api_key = `${process.env.REACT_APP_API}`; 
    let resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=100&user_key=' + api_key;

    fetch(resource_url).then(res => res.json()).then(res => console.log(res))
    
    return dispatch => {
        return fetch(resource_url).then(res => res.json())
            .then( doctors => {
                    if (doctors.error) {
                        alert(doctors.errors)
                    } else {
                        dispatch(addDoctors(doctors))
                    }
                }
            )
    }
}

export const createDoctor = credentials => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/create_doctor", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials) 
        }).then(res => res.json())
            .then( doctor => {
                    if (doctor.error) {
                        alert(doctor.errors)
                    } else {
                        dispatch(saveDoctor(doctor))
                    }
                }
            )
    }
}