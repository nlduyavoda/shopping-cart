import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import "./App.css";
import Cart from "./component/cart";
import Pokemons from "./component/pokemons";
import { pokemon } from "./type";

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
  const [pokemons, setPokemon] = useState<pokemon[]>([]);

  const handleAdd = (pokemon: pokemon) => {
    const isIncluded = pokemons.some((item) => item.id === pokemon.id);
    if (isIncluded) {
      pokemons.map((item: pokemon) => {
        if (pokemon.id === item.id) {
          const quantity = item.quantity + 1;
          return { ...item, quantity: quantity };
        }
      });
    } else {
      setPokemon([...pokemons, { ...pokemon, quantity: 1 }]);
    }
    // }
  };

  return (
    <div className="App">
      <Cart pokemons={pokemons} />
      {!loading && data.pokemons.length ? (
        <Pokemons
          pokemons={data.pokemons}
          pokemonState={pokemons}
          onSetPokemon={handleAdd}
        />
      ) : (
        "loading"
      )}
    </div>
  );
}

export default App;
