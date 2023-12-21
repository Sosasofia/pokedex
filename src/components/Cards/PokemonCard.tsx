import React, { useState } from "react";
import styled from "styled-components";
import Modal from "components/Modal/Modal";

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

export default function PokemonCard({ ...poke }) {
  const { img, name, color } = poke;
  console.log(poke);
  const [show, setShow] = useState(false);
  const ShowModal = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Card onClick={() => ShowModal()} color={color}>
        <img src={img} alt={name} />
        <h2>{name}</h2>
      </Card>

      <Modal show={show} handleClose={handleClose}>
        <ImageContainer color={color}>
          <img src={img} alt={name} />
          <h2>{name}</h2>
        </ImageContainer>

        <Information>
          <p>
            <strong>{poke.height}</strong>Height
          </p>
          <p>
            <strong>{poke.weight}</strong>Weight
          </p>
          <p>
            <strong>{poke.hp}</strong>Hp
          </p>
          <p>
            <strong>{poke.exp}</strong>Exp
          </p>
        </Information>
      </Modal>
    </>
  );
}
