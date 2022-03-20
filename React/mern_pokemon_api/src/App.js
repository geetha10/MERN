import './App.css';
import { useState } from 'react';
import axios from 'axios';
import PokemonWithImg from './Components/PokemonWithImg';

function App() {

  const [pokemonList, setPokemonList] = useState([])

  function fetchPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        return jsonResponse.results
        //return jsonResponse.results
      })
      .then((pokemons) =>{
        setPokemonList(pokemons)
        console.log("After setting pokemons to list",pokemonList.length)
      })
      .catch(error => console.log("Error: ", error))
  }

  function axiosPokemons(){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response =>{
      setPokemonList(response.data.results)
      console.log("After setting pokemons to list",pokemonList.length)
    })
    .catch(error => console.log("Error: ", error))
  }


  return (
    <div className="App">
      <h1>Pokemons Assignment</h1>
      <button onClick={fetchPokemons}>Click Here to get a list of Pokemons(Fetch)</button>
      <button onClick={axiosPokemons}>Click Here to get a list of Pokemons(Axios)</button>
      <p>{pokemonList.length}</p>
      <ul>
        {
          pokemonList.map((pokemon, index) => {
            return (
              <div key={index}>
                <li>{pokemon.name}</li>
              </div>
            )
          })
        }
      </ul>
      <div>
      <h4>Pokemons With Images</h4>
      <PokemonWithImg></PokemonWithImg>
      </div>
      
    </div>
  );
}

export default App;
