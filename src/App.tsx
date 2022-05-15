import React, { useState } from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import Pokemons from "./component/pokemons";
import Cart from "./component/cart";
const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      number
      image
    }
  }
`;
function App() {
  const { data, loading } = useQuery(GET_POKEMONS, {
    variables: { first: 12 },
  });
  const [pokemon, setPokemon] = useState([]);

  return (
    <div className="App">
      <Cart number={1} pokemon={pokemon} />
      {!loading && data.pokemons.length ? (
        <Pokemons
          pokemons={data.pokemons}
          pokemonState={pokemon}
          onSetPokemon={setPokemon}
        />
      ) : (
        "loading"
      )}
    </div>
  );
}

export default App;
