import React, { useState, createContext, useEffect } from "react";
import { Cp } from "../../atoms/cp";
import { Cp as CpTyping } from "../../helpers/apis/cp/interfaces";
import { PopUp } from "../Popup";
import scss from "./index.module.scss";
import { onChangeModalCp, PropsModalCp } from "./types";
import { Validation } from "./Validations";

export const ContextModal = createContext({
  cp: "",
});
const { Provider } = ContextModal;

const ModalCp = ({
  onChange = () => {},
  fetchResource = null,
}: PropsModalCp) => {
  const [Values, SetAllValues] = useState<CpTyping[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [cp, setCp] = useState<string>("");

  useEffect(() => {
    if (cp.length === 5) setShowModal(true);
  }, [cp]);

  return (
    <Provider
      value={{
        cp,
      }}
    >
      {showModal ? (
        <PopUp
          addresses={Values}
          onConfirm={(adress) => {
            setShowModal(false);

            // const onChangeValue:onChangeModalCp = {
            //   colonia:adress.colonia,
            //   estado:adress.estado,
            //   municipio:adress.municipio,
            //   tipoDeZona:adress.tipoDeZona,
            //   cp
            // }

            // const onChangeValue:onChangeModalCp = {
            //   ...adress,
            //   cp:cp
            // }

            const onChangeValue: onChangeModalCp = {
              ...adress,
              cp,
            };

            onChange(onChangeValue);
          }}
        />
      ) : null}

      <div className={scss.container}>
        <label>Codigo postal</label>
        <Cp
          fetchResource={fetchResource}
          onChange={(list, cp) => {
            SetAllValues(list);
            setCp(cp);
          }}
          props={{
            placeholder: "Solo números, ejemplo: 64720",
          }}
        />
        <Validation />
      </div>
    </Provider>
  );
};

export { ModalCp };
