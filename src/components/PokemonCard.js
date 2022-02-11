import React, { useState } from "react"
import styled from "styled-components"
import Modal from "./Modal"

const StyledPokemonCard = styled.div`
    background-color: ${props => props.color || "aliceblue"};
    border-radius: 10px;
    box-shadow: 5px 5px 12px 0px rgba(0,0,0,0.35);
    padding: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
        width:150px;
        height:150px;
    }
`
const StyledPokemonInfo = styled.div`
    width: 80vw;
    height: 60vh;
    max-width: 400px;
    max-height: 500px;
    display: grid;
    grid-template-rows: 70% 30%;
    background-color: white;
    border-radius: 20px;

    > .Img-container {
        background-color: ${props => props.color || "aliceblue"};
        border-radius: 20px 20px 0 0;
        font-size: 30px;
        height: 200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items:center;
    }

    > .Img-container img {
        cursor: pointer;
        max-width: 250px;
        background-color: white;
        border-radius: 50%;
        border: 1px solid lightgrey;
        margin: 20px 0;
    }

    > .Info-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        border-top: 1px solid lightgrey;
        padding: 10px;
    }

    > .Info-container p {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    > .Info-container p span {
        font-weight: bold;
        font-size: 18px;
    }
`

export default function PokemonCard({ ...poke }) {
    const { img, name, color, height, weight, hp, exp } = poke
    const [show, setShow] = useState(false);
    const ShowModal = () => setShow(true)
    const handleClose = () => setShow(false)


    return (
        <>
            <StyledPokemonCard onClick={() => ShowModal()} color={color}>
                <img src={img} alt={name} />
                <h2>{name}</h2>
            </StyledPokemonCard>

            <Modal show={show} handleClose={handleClose}>
                <StyledPokemonInfo color={color}>
                    <div className="Img-container">
                        <img src={img} alt={name} />
                        <h4>{name}</h4>
                    </div>

                    <div className="Info-container">
                        <p><span>{height}</span>Height</p>
                        <p><span>{weight}</span>Weight</p>
                        <p><span>{hp}</span>Hp</p>
                        <p><span>{exp}</span>Exp</p>
                    </div>
                </StyledPokemonInfo>
            </Modal>
        </>
    )
}