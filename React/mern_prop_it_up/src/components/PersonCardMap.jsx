import React, {Component} from "react";
import style from './PersonCard.module.css'

class PersonCardMap extends Component{
    constructor(props) {
        super(props)
        this.state = {

            personsList: this.props.personsList
        }
    }
    incrementAge=(i)=>{
        const modifyPerson=this.state.personsList;
        modifyPerson[i].age +=1; 

        this.setState({
            ...this.state,
            personsList:modifyPerson
        })
    }
    render(){
        const listOfPersons=this.props.personsList;
        console.log(listOfPersons);
        return(
            listOfPersons.map((person,i) => {
                const {firstName,lastName} = person;
                return(
                    <fieldset>
                        <legend>PersonCardMap.jsx</legend>
                        <div className="style.div">
                        <h1>{firstName}, {lastName}</h1>
                        <p>Age : {person.age}</p>
                        <p>Hair Colour: {person.hairColor}</p>
                        <button onClick={()=>this.incrementAge(i)}>Birthday Button for {firstName} {lastName}</button>
                        </div>
                    </fieldset>
                    
                )
            }
            )
        )
    }
}

export default PersonCardMap;