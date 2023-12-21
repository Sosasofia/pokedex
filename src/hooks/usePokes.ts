import { useState, useEffect } from "react";
import getPokemonsList from "services/getPokemon";

const INITIAL_PAGE = 0;

import { FixMeLater } from "../App";

export default function usePokemons() {
  const [pokemons, setPokemons] = useState<FixMeLater>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingNextPage, setLoadingNextPage] = useState<boolean>(false);
  const [page, setPage] = useState<number>(INITIAL_PAGE);

  useEffect(
    function () {
      setLoading(true);
      getPokemonsList().then((res) => {
        setPokemons(res);
        setLoading(false);
      });
    },
    [setPokemons]
  );

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;
      setLoadingNextPage(true);

      getPokemonsList({ page }).then((nextPokes) => {
        setPokemons((prevPokes: FixMeLater) => prevPokes.concat(nextPokes));
        setLoadingNextPage(false);
      });
    },
    [page]
  );

  return { loading, loadingNextPage, pokemons, setPage };
}
