import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #c84b31;
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;

  img {
    width: 50px;
    height: 50px;
    margin-left: 20px;
  }

  h1 {
    color: white;
    letter-spacing: 4px;
    font-size: 24px;
    margin-left: 10px;
  }

  @media (min-width: 1440px) {
    height: 90px;

    h1 {
      font-size: 30px;
    }

    img {
      width: 70px;
      height: 70px;
    }
  }
`;

export default function Header() {
  return (
      <StyledHeader className="App-header">
        <img
          src="https://img.icons8.com/clouds/100/000000/pokemon-go.png"
          alt="icon"
        />
        <h1>Pokedex</h1>
      </StyledHeader>
  );
}
