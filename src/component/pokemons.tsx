import { cartType, pokemon } from "../type";
import "./pokemons.css";

export default function Pokemons({
  pokemons,
  onAddToCart,
}: {
  pokemons: pokemon[];
  onAddToCart: (cart: cartType) => void;
}) {
  return (
    <div className="pokemons">
      {pokemons.map((pokemon: pokemon) => {
        return (
          <div className="pokemon" key={pokemon.id}>
            <div className="name">{pokemon.name}</div>
            <div className="image">
              {/* <img src={pokemon.image} alt="" /> */}
            </div>
            <div className="btn-add-to-cart">
              <button onClick={() => onAddToCart({ ...pokemon, quantity: 1 })}>
                add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
