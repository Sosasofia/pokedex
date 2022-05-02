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

export default function PokemonCard({ ...poke }) {
  const { img, name, color } = poke;

  const [show, setShow] = useState(false);
  const ShowModal = () => setShow(true);
  const handleClose = () => setShow(false);


  return (
    <>
      <Card onClick={() => ShowModal()} color={color}>
        <img src={img} alt={name} />
        <h2>{name}</h2>
      </Card>

      <Modal show={show} handleClose={handleClose} data={poke} /> 
    </>
  );
}
