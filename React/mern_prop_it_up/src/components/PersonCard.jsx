import React, {Component} from "react";

class PersonCard extends Component{
    constructor(props) {
        super(props)
        this.state = {
            personAge:this.props.person.age
        }
    }
    incrementAge=(i)=>{
        this.setState({
            personAge : this.state.personAge +1
        })
    }
    render(){
        const {firstName,lastName} = this.props.person;
        return(   
            <fieldset>
                <legend>PersonCard.js</legend>  
                <div className="style.div">
                    <h1>{firstName}, {lastName}</h1>
                    <p>Age : {this.state.personAge}</p>
                    <p>Hair Colour: {this.props.person.hairColor}</p>
                    <button onClick={()=>this.incrementAge()}>Birthday Button for {firstName} {lastName}</button>
                </div>
            </fieldset>
        )
    }
}

export default PersonCard;