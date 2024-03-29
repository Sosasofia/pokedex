import React from "react";
import styled from "styled-components";
import PokemonList from "components/Cards/PokemonList";
import Spinner from "components/Spinner/Spinner";
import usePokemon from "hooks/usePokes";

const Button = styled.button`
  align-self: center;
  height: 55px;
  width: 200px;
  background-color: #c84b31;
  color: white;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  box-shadow: 3px 4px 4px 0px rgb(0 0 0 / 35%);
  margin-bottom: 50px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #c84a31c7;
  }

  &:active {
    font-size: 1rem;
    transform: scale(0.9);
    box-shadow: 0 3px 15px -2px;
  }
`;

export default function Home() {
  const { loading, pokemonList, setPage } = usePokemon();
  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      {loading ? <Spinner></Spinner> : <PokemonList pokes={pokemonList} />}
      <Button onClick={handleNextPage}>Load More</Button>
    </>
  );
}
