import "./pokemons.css";
export type pokemon = {
  id: string;
  name: string;
  number: string;
  image: string;
  quantity?: number;
};

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
      {pokemons.map(({ quantity = 1, ...pokemon }: pokemon) => {
        return (
          <div className="pokemon" key={pokemon.id}>
            <div className="name">{pokemon.name}</div>
            <div className="image">
              <img src={pokemon.image} alt="" />
            </div>
            <div className="btn-add-to-cart">
              <button onClick={() => onSetPokemon(pokemon)}>add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
