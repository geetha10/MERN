import React, { useState } from 'react'
import './PersonCard.css'
const PersonCard = (props) => {
    
    const [person, setPerson] = useState({
        ...props.person
    })
    const {firstName,lastName} = person
    const incrementAge=() =>{
        
        setPerson({
            ...person,
            age:person.age+1
        })
    }
    return (
        <div className="person">
            <h1>{ lastName }, { firstName }</h1>
            <p>Age: { person.age}</p>
            <p>Hair Color: { person.hairColor }</p>
            <button onClick={() => incrementAge()}>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard