import React from 'react';

const DoctorCard = ({doctor, note}) => {

    const getSpecialties = () => (
        doctor.specialties.map((specialty, index) => (
            <div key={index}><li>{specialty.name}: {specialty.description}</li><br/></div>
        ))
    )

    const getPractices = () => (
        doctor.practices.map((practice, index) => 
            <div key={index}>
                <li>
                    {practice.name}
                    <div className="accepting-patients">{practice.accepts_new_patients ? "Accepting New Patients" : "NOT Accepting New Patients"}</div>
                    City/State: {practice.visit_address.city.toUpperCase()}/{practice.visit_address.state.toUpperCase()}
                </li>
            <br/>
            </div>
        )
    )

    return (
        <div>
            <h1 className="component-title">Dr. {doctor.profile.last_name}</h1>
            <img src={doctor.profile.image_url} alt="profile_picture"/>
            <div className="DoctorCardProfile">
                
            </div> 
            <div className="row">
                <div className="column">
                <h3>Specialties:</h3>
                {getSpecialties()}
                </div>
                <div className="column">
                <h3>Practices:</h3>
                {getPractices()}
                </div>
            </div>
        </div>
    )
}

export default DoctorCard; 