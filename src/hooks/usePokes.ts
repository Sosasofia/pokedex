import { useState, useEffect } from "react";
import getPokemonList from "services/getPokemon";
import { PartialPokemon } from "interfaces/index";

const INITIAL_PAGE = 0;

export default function usePokemon() {
  const [pokemonList, setPokemonList] = useState<PartialPokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingNextPage, setLoadingNextPage] = useState<boolean>(false);
  const [page, setPage] = useState<number>(INITIAL_PAGE);

  useEffect(() => {
    setLoading(true);
    getPokemonList().then((res) => {
      setPokemonList(res);
      setLoading(false);
    });
  }, [setPokemonList]);

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;
      setLoadingNextPage(true);

      getPokemonList({ page }).then((nextPokes) => {
        setPokemonList((prevPokes) => prevPokes.concat(nextPokes));
        setLoadingNextPage(false);
      });
    },
    [page]
  );

  return { loading, loadingNextPage, pokemonList, setPage };
}
