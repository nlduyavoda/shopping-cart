import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import "./App.css";
import Cart from "./component/cart";
import CartDispatch from "./component/cart/useCartDispatch";
import Form from "./component/form";
import Pokemons from "./component/pokemons";
import { GET_USERS } from "./graphql/query";
import { action, cartType } from "./type";

function App() {
  const { data, loading } = useQuery(GET_USERS, {
    variables: { first: 12 },
  });
  console.log("data :>> ", data);
  const [carts, setCarts] = useState<cartType[]>([]);

  const handleAdd = (pokemon: cartType) => {
    const isExisted = carts.some((item) => item.id === pokemon.id);
    if (isExisted) {
      setCarts(CartDispatch(pokemon, carts, action.INCREASE));
    } else {
      setCarts([...carts, pokemon]);
    }
  };

  const handleReduce = (pokemon: cartType) => {
    const cartIndex = carts.findIndex(
      (element: cartType) => element.id === pokemon.id && element.quantity
    );
    if (pokemon.quantity > 1) {
      setCarts(CartDispatch(pokemon, carts, action.REDUCE));
    } else {
      const newCarts = [...carts];
      newCarts.splice(cartIndex, 1);
      setCarts(newCarts);
    }
  };

  return (
    <div className="App">
      <Form />
      {/* <Cart carts={carts} onReduce={handleReduce} /> */}
      {/* {!loading && data.pokemons.length ? (
        <Pokemons pokemons={data.pokemons} onAddToCart={handleAdd} />
      ) : (
        "loading"
      )} */}
    </div>
  );
}

export default App;
