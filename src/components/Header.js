import React from "react"
import styled from "styled-components"

const StyledHeader = styled.div`
  background-color: #C84B31;
  display: flex;
  align-items: center;
  height: 90px;
  width:100%;

  > img {
    width:70px;
    height: 70px;
    margin-left: 20px;
  }

  > h1 {
    color: white;
    letter-spacing: 4px;
    font-size: 30px;
    margin-left: 10px;
  }
`

export default function Header() {
  return <>
    <StyledHeader className='App-header'>
      <img src="https://img.icons8.com/clouds/100/000000/pokemon-go.png" alt="icon" />
      <h1>Pokedex</h1>
    </StyledHeader>
  </>
}

