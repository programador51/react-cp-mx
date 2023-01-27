import styled from "styled-components";

const ContainerPostalCode = styled.div`
  font-family: var(--NunitoSans);
  font-size: 16px;
  label {
    margin: 0 0 5px 0;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  input[type="number"] {
    border-radius: 0;
    border: none;
    background-color: #f7f7f9;
    padding: 10px 15px;
    width: 100%;
    &:focus,
    :active {
      border: 3px solid #c6c6c6;
      border-style: none none solid none;
      outline: none;
      -moz-appearance: textfield;
    }
    &::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      -webkit-appearance: textfield;
    }
  }
`;

const Success = styled.p`
  font-family: var(--NunitoSans);
  font-size: 16px;
  margin: 5px 0;
  color: #4bbf73;
`;

const Invalid = styled.p`
  font-family: var(--NunitoSans);
  font-size: 16px;
  margin: 5px 0;
  color: #d9534f;
`;

const ContainerModalCp = styled.div``;

export { ContainerPostalCode, Success, Invalid, ContainerModalCp };
