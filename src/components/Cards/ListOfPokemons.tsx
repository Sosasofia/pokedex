import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import { FixMeLater } from "../../App";

const List = styled.ul`
  display: grid;
  list-style-type: none;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  margin: 50px 10px;
  gap: 20px;

  @media (min-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export default function ListOfPokemons({ pokes }: FixMeLater) {
  return (
    <List className="ListOfCards">
      {pokes.map((pokemon: FixMeLater) => (
        <li key={pokemon.id}>
          <PokemonCard {...pokemon} />
        </li>
      ))}
    </List>
  );
}
