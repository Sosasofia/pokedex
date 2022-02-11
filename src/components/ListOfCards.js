import React from "react"
import PokemonCard from "./PokemonCard"
import styled from "styled-components"

const StyledList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 50px 10px;
    gap: 20px; 
`

export default function ListOfCards({ pokes }) {
    return (
        <StyledList className="ListOfCards">
            {
                pokes.map((pokemon) =>
                    <div key={pokemon.id}>
                        <PokemonCard {...pokemon} />
                    </div>
                )
            }
        </StyledList>
    )
}


