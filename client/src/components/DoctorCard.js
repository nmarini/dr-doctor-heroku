import React from 'react';

const DoctorCard = ({doctor}) => {

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
                {practice.accepts_new_patients ? "Accepting New Patients" : "NOT Accepting New Patients"}
            <br/>
                City/State: {practice.visit_address.city.toUpperCase()}/{practice.visit_address.state.toUpperCase()}
            </li>
        )
    )

    const getInsurances = () => (
            doctor.insurances.map((insurance, index) => (
                <div key={index}>
                    <td>{insurance.insurance_plan}</td>
                    <td>{insurance.insurance_provider}</td>
                </div>
            )
        )
    )

    return (
        <div>
            <h1>Dr. {doctor.profile.last_name}</h1>
            <img src={doctor.profile.image_url} />
            <div className="DoctorCardProfile">
                
            </div> 
            <div className="row">
                <div className="column">
                <h5>Specialties:</h5>
                <ul>{getSpecialties()}</ul>
                <h5>Practices:</h5>
                <ul>{getPractices()}</ul>
                </div>
                <div className="column">
                <h5>Accepted Insurances:</h5>
                <table>
                    <thead>
                <tr>
                    <th>Insurance Plan</th>
                    <th>Insurance Provider</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    {getInsurances()}
                </tr>
                </tbody>
            </table>
                </div>
            </div>
            
            <button onKeyUp={createDoctor} >Save</button> 
            {console.log(doctor)}
        </div>
    )
}

export default DoctorCard; 