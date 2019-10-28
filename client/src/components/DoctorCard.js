import React from 'react';

const DoctorCard = ({doctor, note}) => {

    const getSpecialties = () => (
        doctor.specialties.map((specialty, index) => (
            <li key={index}>{specialty.name}: {specialty.description}</li>
        ))
    )

    const getPractices = () => (
        doctor.practices.map((practice, index) => 
            <li key={index}>
                {practice.name}
            <br/>
                <div className="accepting-patients">{practice.accepts_new_patients ? "Accepting New Patients" : "NOT Accepting New Patients"}</div>
            <br/>
                City/State: {practice.visit_address.city.toUpperCase()}/{practice.visit_address.state.toUpperCase()}
            </li>
        )
    )

    return (
        <div>
            DoctorCard
            <h1>Dr. {doctor.profile.last_name}</h1>
            <img src={doctor.profile.image_url} alt="profile_picture"/>
            <div className="DoctorCardProfile">
            {/* <div>DoctorCard Note: {note}</div> */}

                
            </div> 
            <div className="row">
                <div className="column">
                <h5>Specialties:</h5>
                {getSpecialties()}
                </div>
                <div className="column">
                <h5>Practices:</h5>
                {getPractices()}
                </div>
            </div>
        </div>
    )
}

export default DoctorCard; 