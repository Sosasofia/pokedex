import React from "react"
import ReactDom from "react-dom"
import styled from "styled-components"

const StyledModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    //height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.7);
`
const StyledModalInfo = styled.div`
    position:fixed;
    //height: 60vh;
    
    > .closeModal {
        position:absolute;
        top:0;
        right:0;
        margin : 20px;
        width: 25px;
        cursor:pointer;
    }
`

export default function Modal({ show, handleClose, children }) {

    return ReactDom.createPortal(
        <>
            {
                show ?
                    <StyledModalContainer>
                        <StyledModalInfo>
                            <img className="closeModal" src="/icon-close-modal.svg" onClick={handleClose} alt="close menu" />
                            {children}
                        </StyledModalInfo>
                    </StyledModalContainer >
                    : null
            }
        </>,
        document.getElementById("modal")
    )
}