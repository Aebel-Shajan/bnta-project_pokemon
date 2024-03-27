import React, { useState, useEffect } from "react";
import PokemonList from "../components/PokemonList";
import PokemonForm from "../components/PokemonForm";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const PokemonContainer = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const loadPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10");
    const jsonData= await response.json();
    const pokemonJsonList = jsonData["results"];
    console.log(pokemonJsonList);
    let pokemonList = [];
    for (let i = 0; i < pokemonJsonList.length; i++ ) {
      const pokemonResponse = await fetch(pokemonJsonList[i]["url"]);
      const pokemonInfo = await pokemonResponse.json();
      pokemonList.push(pokemonInfo);
    }
    setPokemons(pokemonList);
    setFilteredPokemons(pokemonList);
  }

  useEffect(() => {
    loadPokemon()
  }, []);

  const handleSubmit = (search) => {
    const filtered = pokemons.filter(
      (pokemon) => {
        return pokemon.name.includes(search)
      }
    );
    setFilteredPokemons(filtered);
  };


  return (
    <div>
      <h1>Pokedex</h1>
      <PokemonForm handleSearch={handleSubmit} />
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}

export default PokemonContainer;
