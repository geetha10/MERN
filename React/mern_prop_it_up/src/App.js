import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
import PersonCardMap from './components/PersonCardMap';
const personsList=[
  {
    firstName: "Geethanjali",
    lastName:"Medisetty",
    age: 33,
    hairColor: "Black"
  },
  {
    firstName: "Pranav Kumar",
    lastName:"Konduru",
    age: 33,
    hairColor: "Black"
  },
  {
    firstName: "Smith",
    lastName:"John",
    age: 33,
    hairColor: "Brown"
  },
  {
    firstName: "Fillmore",
    lastName:"Millard",
    age: 33,
    hairColor: "Brown"
  }
]
const person1={
      firstName: "Fillmore",
      lastName:"Millard",
      age: 33,
      hairColor: "Brown"
    }
const person2={
      firstName: "Smith",
      lastName:"John",
      age: 33,
      hairColor: "Brown"
}
const person3={
  firstName: "Pranav Kumar",
  lastName:"Konduru",
  age: 33,
  hairColor: "Black"
}
const person4={
  firstName: "Geethanjali",
    lastName:"Medisetty",
    age: 33,
    hairColor: "Black"
}
function App() {
  console.log(personsList)
  return (
    <div className="App">
    <fieldset>
      <legend>App.js</legend>
      <PersonCard person={person1}/>
      <PersonCard person={person2}/>
      <PersonCard person={person3}/>
      <PersonCard person={person4}/>
    </fieldset>
    <fieldset>
      <PersonCardMap personsList={personsList}/>
    </fieldset>
    </div>
  );
}

export default App;
