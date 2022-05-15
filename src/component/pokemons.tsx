import "./pokemons.css";
export interface pokemon {
  id: string;
  name: string;
  number: string;
  image: string;
}

export default function Pokemons({
  pokemons,
  onSetPokemon,
}: {
  pokemons: pokemon[];
  pokemonState: pokemon[] | [];
  onSetPokemon: any;
}) {
  return (
    <div className="pokemons">
      {pokemons.map((pokemon: pokemon) => {
        return (
          <div className="pokemon" key={pokemon.id}>
            <div className="name">{pokemon.name}</div>
            <div className="image">
              <img src={pokemon.image} alt="" />
            </div>
            <div className="btn-add-to-cart">
              <button onClick={() => onSetPokemon({ ...pokemon })}>
                add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
