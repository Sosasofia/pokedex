import React from "react";
import ReactDom from "react-dom";
import { Overlay, ModalCard, Close, ImageContainer, Information } from "./style";

export default function Modal({ show, handleClose, data }) {
  const { img, name, color, height, weight, hp, exp } = data;

  return ReactDom.createPortal(
    <div>
      {show ? (
        <Overlay>
          <ModalCard>
            <Close
              className="closeModal"
              src="/icon-close-modal.svg"
              onClick={handleClose}
              alt="close menu"
            />
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
          </ModalCard>
        </Overlay>
      ) : null}
    </div>,
    document.getElementById("modal")
  );
}
