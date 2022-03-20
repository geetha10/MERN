import React,{useState, useEffect} from 'react'

function UseStateExample() {

    const [people, setPeople] = useState([]);
    console.log("Hello")
    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(response => setPeople(response.results))
    },[]);

    return (
        <div>
            {people ? people.map((person, index) => {
                return (<div key={index}>{person.name}</div>)
            }):<p>No people yet</p>}
        </div>
    );
}

export default UseStateExample