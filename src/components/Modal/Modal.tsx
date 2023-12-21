import React from "react";
import ReactDom from "react-dom";
import { Overlay, ModalCard, Close } from "./style";

type Props = {
  show: boolean;
  toggleClose: (value: boolean) => void;
  children: JSX.Element | JSX.Element[];
};

const Modal = ({ show, toggleClose, children }: Props) => {
  return ReactDom.createPortal(
    <div className="modal">
      {show ? (
        <Overlay>
          <ModalCard>
            <Close
              className="closeModal"
              src="/icon-close-modal.svg"
              onClick={() => toggleClose(!show)}
              alt="close menu"
            />
            {children}
          </ModalCard>
        </Overlay>
      ) : null}
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
