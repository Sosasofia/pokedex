import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import { PartialPokemon } from "interfaces/index";

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

type Props = {
  pokes: PartialPokemon[];
};

const PokemonList = ({ pokes }: Props) => {
  return (
    <List>
      {pokes.map((pokemon: PartialPokemon) => (
        <li key={pokemon.id}>
          <PokemonCard {...pokemon} />
        </li>
      ))}
    </List>
  );
};

export default PokemonList;
