import React, { useRef } from "react";
import { PropsAdressListItem } from "./types";
import { v4 as uuidv4 } from "uuid";
import { AdressStyle, ContainerAdress } from "./styles";

function Address({ item, onChange }: PropsAdressListItem): JSX.Element {
  const htmlDom = useRef(uuidv4());

  return (
    <ContainerAdress>
      <input
        onChange={(e) => onChange(item)}
        type="radio"
        name="infoaddress"
        id={htmlDom.current}
      />
      <AdressStyle htmlFor={htmlDom.current}>
        {item.tipoDeZona} {item.colonia} {item.estado} {item.municipio}
      </AdressStyle>
    </ContainerAdress>
  );
}

export { Address };
