import React, { useState, useEffect } from "react";
import Form from "../Components/Form";
import PokemonList from "../components/PokemonList";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const PokemonContainer = () => {
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);

return (
    <div>
      <h1>Pokemon Search</h1>
      <Form ></Form>
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}

export default PokemonContainer;
