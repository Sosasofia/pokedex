import React from "react";
import styled from "styled-components";
import Modal from "components/Modal/Modal";
import useModal from "hooks/useModal";
import { PartialPokemon } from "interfaces/index";

const Card = styled.div`
  background-color: ${(props) => props.color || "aliceblue"};
  border-radius: 10px;
  box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.35);
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
  }
`;

const Information = styled.div`
  display: grid;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid lightgrey;
  padding: 20px;

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1440px) {
    font-size: 1.4rem;
  }
`;

const ImageContainer = styled.div`
  background-color: ${(props) => props.color || "aliceblue"};
  border-radius: 20px 20px 0 0;
  width: 100%;
  font-size: 25px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    cursor: pointer;
    width: 250px;
    background-color: white;
    border-radius: 50%;
    border: 1px solid lightgrey;
    margin: 20px 0 10px 0;
  }

  @media (min-width: 1440px) {
    height: 300px;
    font-size: 1.6rem;

    img {
      width: 350px;
    }
  }
`;

type Props = PartialPokemon;

const PokemonCard = ({ ...pokemon }: Props) => {
  const { img, name, color, height, hp, weight, exp } = pokemon;
  const { show, toggle } = useModal();

  return (
    <>
      <Card onClick={() => toggle()} color={color}>
        <img src={img} alt={name} />
        <h2>{name}</h2>
      </Card>

      <Modal show={show} toggleClose={toggle}>
        <ImageContainer color={color}>
          <img src={img} alt={name} />
          <h2>{name}</h2>
        </ImageContainer>

        <Information>
          <p>
            <strong>{height}</strong>Height
          </p>
          <p>
            <strong>{weight}</strong>Weight
          </p>
          <p>
            <strong>{hp}</strong>Hp
          </p>
          <p>
            <strong>{exp}</strong>Exp
          </p>
        </Information>
      </Modal>
    </>
  );
};

export default PokemonCard;
