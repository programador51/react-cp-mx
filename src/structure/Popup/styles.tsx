import styled from "styled-components";

const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.673);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Modal = styled.div`
  background: whitesmoke;
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 50vw;
  grid-template-rows: 10vh 50vh 10vh;
  box-shadow: 0px 0px 15px black;
  font-family: NunitoSans;
  border: 2px solid rgba(0, 0, 0, 0.175);
  @media (max-width: 768px) {
    background: whitesmoke;
    text-transform: uppercase;
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: 10vh 80vh 10vh;
    box-shadow: 0px 0px 15px black;
    font-family: NunitoSans;
    border: 2px solid rgba(0, 0, 0, 0.175);
  }
`;

const Header = styled.div`
  display: flex;
  padding: 16px;
  color: #1a1a1a;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #c6c6c6;
`;

const Close = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border: none;
  background-color: transparent;
  color: black;
  padding: 5px 10px 5px 10px;
  opacity: 0.5;
  transition: opacity 0.1s ease-in 0.1s;

  svg {
    width: 30px;
    height: 30px;
    pointer-events: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  color: #55595c;
  align-items: center;
  justify-content: center;
  border: 1px solid "#c61c6c6";
  overflow: auto;
`;

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Footer = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid #c6c6c6;
`;

const Accept = styled.button`
  color: #fff;
  font-size: 0.875rem;
  text-transform: uppercase;
  border: none;
  padding: 12px 24px 12px 24px;
  border-radius: 0;
  background-color: #1a1a1a;
  &:hover {
    background-color: #161616;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export { ModalContainer, Modal, Header, Close, Body, Spinner, Footer, Accept };
