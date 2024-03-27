import React, { useState, useEffect } from "react";
import PokemonList from "../components/PokemonList";
import PokemonForm from "../components/PokemonForm";


const PokemonContainer = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [types, setTypes] = useState([]);

  // Load a pokemon object from api
  const loadPokemon = async (pokemonUrl) => {
    const pokemonResponse = await fetch(pokemonUrl);
    const pokemon = await pokemonResponse.json();
    const moves = pokemon.moves.map((move) => {
      return move.move.name;
    })
    const types = pokemon.types.map((type) => {
      return type.type.name;
    })
    const pokemonObject = {
      name: pokemon.name,
      moves: moves,
      types: types,
      baseStat: pokemon.stats[0].base_stat,
      imageSrc: pokemon.sprites.front_default
    }
    return pokemonObject;
  }

  // Load a list of pokemon objects from url
  const loadPokemonList = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100");
    const jsonData = await response.json();
    const pokemonJsonList = jsonData["results"];
    let pokemonListTemp = [];
    for (let i = 0; i < pokemonJsonList.length; i++) {
      const pokemonObject = await loadPokemon(pokemonJsonList[i]["url"]);
      pokemonListTemp.push(pokemonObject);
    }
    setPokemonList(pokemonListTemp);
    setFilteredPokemonList(pokemonListTemp);
  }

  // Load types from api
  const loadTypes = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/type");
    const jsonData = await response.json();
    const typesList = jsonData["results"].map(element => element.name);
    setTypes(typesList);
    console.log(typesList);
  }

  useEffect(() => {
    loadPokemonList();
    loadTypes();
  }, []);


  const handleForm= (search, typeFilter) => {
    const filtered = pokemonList.filter(
      (pokemon) => {
        if (typeFilter === "all-types") {
          return pokemon.name.includes(search)
        }
        return pokemon.name.includes(search) && pokemon.types.includes(typeFilter);
      }
    );
    setFilteredPokemonList(filtered);
  };


  return (
    <div>
      <h1>Pokedex</h1>
      <PokemonForm handleForm={handleForm} types={types} />
      <PokemonList pokemons={filteredPokemonList} />
    </div>
  );
}

export default PokemonContainer;
