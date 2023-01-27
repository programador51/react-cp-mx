import styled from "styled-components";

const ContainerAdress = styled.div`
  font-family: var(--NunitoSans);
  input {
    display: none;
  }
  input:checked + label {
    border: 2px solid #343a40;
  }
`;

const AdressStyle = styled.label`
  display: block;
  font-family: var(--NunitoSans);
  background-color: #d1d1d1;
  padding: 24px;
  transition: background 0.15s ease-in 0.15s;
  &:hover {
    background-color: #c1c1c1;
  }
`;

export { AdressStyle, ContainerAdress };
