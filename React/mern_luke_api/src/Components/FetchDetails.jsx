import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";

function FetchDetails() {

    const [response, setResponse] = useState({});
    const [errorImage, setErrorImage] = useState("");

    const { resource, id } = useParams()
    const url = `https://swapi.dev/api/${resource}/${id}`
    console.log(url)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setResponse(response.data)
                setErrorImage("")
                console.log("Response from Start Wars Person API is: ", response.data)
            })
            .catch(error => {
                console.log("Error: ", error)
                setErrorImage("https://images6.fanpop.com/image/photos/36200000/Star-Wars-image-star-wars-36270866-500-398.png")
            })
    },
        [resource, id])
        return (
            <div className="response">
                <h2>Results are</h2>
                {
                    (errorImage === "")?(
                    (resource === "people") ?
                        (<div>
                            <h3>
                                {response.name}
                            </h3>
                            <p>
                                <span className="responseLabel">Height: </span>
                                {response.height}
                            </p>
                            <p>
                                <span className="responseLabel">Mass: </span>
                                {response.mass}
                            </p>
                            <p>
                                <span className="responseLabel">Hair Color: </span>
                                {response.hair_color}
                            </p>
                            <p>
                                <span className="responseLabel">Skin Color: </span>
                                {response.skin_color}
                            </p>
                            <p>
                                <span className="responseLabel">Eye Color: </span>
                                {response.eye_color}
                            </p>
                            <p>
                                <span className="responseLabel">Birth Year: </span>
                                {response.birth_year}
                            </p>
                            <p>
                                <span className="responseLabel">Home World: </span>
                                {response.homeworld}
                            </p>
                        </div>)
                        : ((resource === "planets") ?
                            (<div>
                                <h3>
                                    <span className="responseLabel">Planet Name: </span>
                                    {response.name}
                                </h3>
                                <p>
                                    <span className="responseLabel">Rotation Period: </span>
                                    {response.rotation_period}
                                </p>
                                <p>
                                    <span className="responseLabel">Orbital Period: </span>
                                    {response.orbital_period}
                                </p>
                                <p>
                                    <span className="responseLabel">Diameter: </span>
                                    {response.diameter}
                                </p>
                                <p>
                                    <span className="responseLabel">Climate: </span>
                                    {response.climate}
                                </p>
                                <p>
                                    <span className="responseLabel">Gravity: </span>
                                    {response.gravity}
                                </p>
                                <p>
                                    <span className="responseLabel">Terrain: </span>
                                    {response.terrain}
                                </p>
                                <p>
                                    <span className="responseLabel">Surface Water: </span>
                                    {response.surface_water}
                                </p>
                                <p>
                                    <span className="responseLabel">Population: </span>
                                    {response.population}
                                </p>
                            </div>) : (
                                <div>
                                    <p>
                                        <span className="responseLabel">StarShip Name: </span>
                                        {response.name}
                                    </p>
                                    <p>
                                        <span className="responseLabel">Model: </span>
                                        {response.model}
                                    </p>
                                    <p>
                                        <span className="responseLabel">Manufacturer: </span>
                                        {response.manufacturer}
                                    </p>
                                    <p>
                                        <span className="responseLabel">Cost In Credits: </span>
                                        {response.cost_in_credits}
                                    </p>
                                    <p>
                                        <span className="responseLabel">Length: </span>
                                        {response.length}
                                    </p>
                                    <p>
                                        <span className="responseLabel">Max Atmospheric Speed: </span>
                                        {response.max_atmosphering_speed}
                                    </p>
                                    <p>
                                        <span className="responseLabel">Crew: </span>
                                        {response.crew}
                                    </p>
                                    <p>
                                        <span className="responseLabel">Passengers: </span>
                                        {response.passengers}
                                    </p>
                                    <p>
                                        <span className="responseLabel">Cargo Capacity: </span>
                                        {response.cargo_capacity}</p>
                                    <p>
                                        <span className="responseLabel">HyperDrive Rating: </span>
                                        {response.hyperdrive_rating}
                                    </p>
                                </div>
                            )
                        )):(
                            <div>
                                <img src={errorImage}/>
                            </div>
                        )
                }
    
            </div>
        )
}

export default FetchDetails