import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
`;

const Close = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  width: 25px;
  cursor: pointer;
`;

const ModalCard = styled.div`
  position: relative;
  width: 300px;
  height: 500px;
  border-radius: 20px;
  display: grid;
  grid-template-rows: 70% 30%;
  background-color: white;
  border-radius: 20px;

  @media (min-width: 1440px) {
    width: 450px;
    height: 650px;
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

export { Overlay, ModalCard, Close, ImageContainer, Information };
