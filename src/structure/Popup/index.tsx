import React, { useState } from "react";
import { parseAddresses } from "../../helpers/cp";
import { Listadresses } from "../../molecules/listadresses/listadresses";
import { AddressI } from "../../molecules/listadresses/types";

import { PropsPopUp } from "./types";
import { SpinnerCircular } from "spinners-react";
import {
  Accept,
  Body,
  Close,
  Footer,
  Header,
  Modal,
  ModalContainer,
  Spinner,
} from "./styles";

/**
 * Render a modal with the list of available addresses
 * @param props - Props
 * @param props.onConfirm - It triggers when user clicks "Aceptar" or close button
 * @returns {JSX.Element}
 */
export const PopUp = ({
  addresses = [],
  onConfirm = () => {},
  isQueryDone = false,
}: PropsPopUp) => {
  const EMPTY_ADDRESS = {
    colonia: "",
    estado: "",
    municipio: "",
    tipoDeZona: "",
  };

  const [optionSelected, setOptionSelected] = useState<AddressI>(EMPTY_ADDRESS);

  return (
    <ModalContainer>
      <Modal>
        <Header>
          <h2>Códigos Postales</h2>
          <Close onClick={(e) => onConfirm(EMPTY_ADDRESS)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Close>
        </Header>
        <Body>
          {!isQueryDone ? (
            <Spinner>
              <p>Cargando</p>
              <SpinnerCircular />
            </Spinner>
          ) : (
            <Listadresses
              addresses={parseAddresses(addresses)}
              onChange={(address) => setOptionSelected(address)}
            />
          )}
        </Body>
        <Footer>
          <Accept
            onClick={(e) => onConfirm(optionSelected)}
            disabled={optionSelected.colonia === ""}
          >
            Aceptar
          </Accept>
        </Footer>
      </Modal>
    </ModalContainer>
  );
};
