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
                <div className="accepting-patients">{practice.accepts_new_patients ? "Accepting New Patients" : "NOT Accepting New Patients"}</div>
            <br/>
                City/State: {practice.visit_address.city.toUpperCase()}/{practice.visit_address.state.toUpperCase()}
            </li>
        )
    )

    // const getInsurances = () => (
    //         doctor.insurances.map((insurance, index) => (
    //             <tr>
    //                 <td>{insurance.insurance_plan}</td>
    //                 <td>{insurance.insurance_provider}</td>
    //             </tr>
    //         )
    //     )
    // )

    const doctorDoctor = () => (
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
                </div>
            </div>
            
            <button onKeyUp={createDoctor} >Save Profile</button> 
            {console.log(doctor)}
        </div>
    )

    const userDoctor = () => (
        <div>
            <h1>Dr. {doctor.last_name}</h1>
            <img src={doctor.image_url} />
            <div className="DoctorCardProfile">
                
                
            </div> 
            
            <button onKeyUp={createDoctor} >Save Profile</button> 
            {console.log(doctor)}
        </div>

    )

    return (
        <div>
            DoctorCard
            {doctor.profile ? console.log(true) : console.log(false)}
        {console.log(doctor)}
        </div>
        // typeof doctor.profile === undefined ? userDoctor() : doctorDoctor()
        // <div>
        //     <h1>Dr. {doctor.profile.last_name}</h1>
        //     <img src={doctor.profile.image_url} />
        //     <div className="DoctorCardProfile">
                
        //     </div> 
        //     <div className="row">
        //         <div className="column">
        //         <h5>Specialties:</h5>
        //         {getSpecialties()}
        //         </div>
        //         <div className="column">
        //         <h5>Practices:</h5>
        //         {getPractices()}
        //         </div>
        //     </div>
            
        //     <button onKeyUp={createDoctor} >Save Profile</button> 
        //     {console.log(doctor)}
        // </div>
    )
}

export default DoctorCard; 