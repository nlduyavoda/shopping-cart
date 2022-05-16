import { useState } from "react";
import { pokemon } from "../pokemons";
import "./index.css";
export default function Cart({ pokemons = [] }: { pokemons: pokemon[] }) {
  const [openModal, setOpenModal] = useState(false);
  // console.log("pokemons :>> ", pokemons);
  return (
    <div className="carts">
      <div
        onClick={() => {
          setOpenModal(!openModal);
        }}
      >
        cart: {pokemons.length}
      </div>
      {pokemons.length > 0 && (
        <div>
          {pokemons.map((pokemon: pokemon) => {
            return (
              <div key={pokemon.id} className="cart">
                <div className="cart-number">{pokemon.number}</div>
                <div className="cart-name">{pokemon.name}</div>
                <div>-</div>
                <div>1</div>
                <div>+</div>
              </div>
            );
          })}
        </div>
      )}
      {/* <div>{pokemon[0].name}</div> */}
    </div>
  );
}
