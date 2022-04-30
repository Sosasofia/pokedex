import { useState, useEffect } from "react"
import getPokemonsList from "services/getPokemon"

const INITIAL_PAGE = 0

export default function usePokemons() {

    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)

    useEffect(function () {
        setLoading(true)
        getPokemonsList()
            .then((res) => {
                setPokemons(res)
                setLoading(false)
            })
    }, [setPokemons])

    useEffect(function () {
        if (page === INITIAL_PAGE) return
        setLoadingNextPage(true)

        getPokemonsList({ page })
            .then(nextPokes => {
                setPokemons(prevPokes => prevPokes.concat(nextPokes))
                setLoadingNextPage(false)
            })
    }, [page])

    return { loading, loadingNextPage, pokemons, setPage }
}