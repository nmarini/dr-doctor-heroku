import React from 'react';

const DoctorCard = (doctor) => {

    const createDoctor = credentials => {
        return fetch("http://localhost:3000/api/v1/create_doctor", {
                credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials) 
        })
    }

    return (
        <div>
            <h1>Doctor Card</h1>
            Dr. {doctor.profile.last_name}
            <img src={doctor.profile.image_url} />
            <button onKeyUp={createDoctor} >Save</button> 

        </div>
    )
}

export default DoctorCard; 