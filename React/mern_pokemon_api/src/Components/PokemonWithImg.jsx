import React, { useState } from 'react'

function PokemonWithImg() {

    const [pokemonList, setPokemonList] = useState([]);

    const getPokemonObject = async (pokemon) => {
        const response = await fetch(pokemon.url);
        const responseJson = await response.json();

        const result = {
            name: pokemon.name,
            imageUrl: responseJson.sprites.front_default
        };
        return result;
    };

    const fetchPokemons = async () => {
        const listOfPokemons = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        const pokemonsJson = await listOfPokemons.json();
        const pokemons = pokemonsJson.results;
        const pokeList = await Promise.all(pokemons.map(getPokemonObject));
        return pokeList;
    };

    function createPokemonList() {
        fetchPokemons().then((listOfPokemons) => {
            setPokemonList(listOfPokemons)
        });
    }
    return (
        <div className="App">
            <h1>Pokemons Assignment</h1>
            <button onClick={createPokemonList}>
                Click Here to get a list of Pokemons
            </button>
            <ul>
                {
                    // <p>{JSON.stringify(pokemonList)}</p>
                    pokemonList.map((pokemon, index) => {
                        console.log("Image URl: ", pokemon);
                        return (
                            <div key={index}>
                                <li>{pokemon.name}</li>
                                <img src={pokemon.imageUrl} />
                            </div>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default PokemonWithImg