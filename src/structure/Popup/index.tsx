import React, { useState } from "react";
import { parseAddresses } from "../../helpers/cp";
import { Listadresses } from "../../molecules/listadresses/listadresses";
import { AddressI } from "../../molecules/listadresses/types";
import scss from "./styles.module.scss";
import { PropsPopUp } from "./types";

/**
 * Render a modal with the list of available addresses
 * @param props - Props
 * @param props.onConfirm - It triggers when user clicks "Aceptar" or close button
 * @returns {JSX.Element}
 */
export const PopUp = ({ addresses = [], onConfirm = () => {} }: PropsPopUp) => {
  const EMPTY_ADDRESS = {
    colonia: "",
    estado: "",
    municipio: "",
    tipoDeZona: "",
  };

  const [optionSelected, setOptionSelected] = useState<AddressI>(EMPTY_ADDRESS);

  return (
    <div className={scss.modalContainer}>
      <div className={scss.modal}>
        <div className={scss.header}>
          <h2 className={scss.title}>Codigos Postales</h2>
          <button
            className={scss.close}
            onClick={(e) => onConfirm(EMPTY_ADDRESS)}
          >
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
          </button>
        </div>
        <div className={scss.body}>
          <Listadresses
            addresses={parseAddresses(addresses)}
            onChange={(address) => setOptionSelected(address)}
            // onChange={setOptionSelected}
          />
        </div>
        <div className={scss.footer}>
          <button
            onClick={(e) => onConfirm(optionSelected)}
            className={scss.accept}
            disabled={optionSelected.colonia === ""}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};
