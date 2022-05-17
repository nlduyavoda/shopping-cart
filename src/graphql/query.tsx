import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
query pokemons($first: Int!) {
  pokemons(first: $first) {
    id
    name
    number
    image
  }
}
`;