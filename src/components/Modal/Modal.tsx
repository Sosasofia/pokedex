import React from "react";
import ReactDom from "react-dom";
import { Overlay, ModalCard, Close } from "./style";

import { FixMeLater } from "../../App";

type Props = {
  show: boolean;
  handleClose: (value: boolean) => void;
  // children: React.ReactNode;
  children: JSX.Element | JSX.Element[];
};

const modalRoot: FixMeLater = document.getElementById("modal");

export default function Modal({ show, handleClose, children }: Props) {
  return ReactDom.createPortal(
    <div className="modal">
      {show ? (
        <Overlay>
          <ModalCard>
            <Close
              className="closeModal"
              src="/icon-close-modal.svg"
              onClick={() => handleClose(!show)}
              alt="close menu"
            />
            {children}
          </ModalCard>
        </Overlay>
      ) : null}
    </div>,
    modalRoot
  );
}
