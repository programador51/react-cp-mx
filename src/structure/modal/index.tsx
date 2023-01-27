import React, { useState, createContext, useEffect } from "react";
import { Cp } from "../../atoms/cp";
import { Cp as CpTyping } from "../../helpers/apis/cp/interfaces";
import { PopUp } from "../Popup";

import { ContainerModalCp, ContainerPostalCode } from "./styles";
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
  const [isQueryDone, setIsQueryDone] = useState(false);
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
      <ContainerModalCp>
        {showModal ? (
          <PopUp
            addresses={Values}
            isQueryDone={isQueryDone}
            onConfirm={(adress) => {
              setShowModal(false);
              const onChangeValue: onChangeModalCp = {
                ...adress,
                cp,
              };

              onChange(onChangeValue);
            }}
          />
        ) : null}

        <ContainerPostalCode>
          <label>Código postal</label>
          <Cp
            fetchResource={fetchResource}
            onChange={(list, cp, loaded) => {
              SetAllValues(list);
              setCp(cp);
              setIsQueryDone(loaded);
            }}
            props={{
              placeholder: "Solo números, ejemplo: 64720",
            }}
          />
          <Validation />
        </ContainerPostalCode>
      </ContainerModalCp>
    </Provider>
  );
};

export { ModalCp };
