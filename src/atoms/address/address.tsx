import React, { useRef } from "react";
import css from "./index.module.scss";
import { PropsAdressListItem } from "./types";
import { v4 as uuidv4 } from "uuid";

function Address({ item, onChange }: PropsAdressListItem): JSX.Element {
  const htmlDom = useRef(uuidv4());

  return (
    <div className={css.containerAdress}>
      <input
        onChange={(e) => onChange(item)}
        type="radio"
        name="infoaddress"
        id={htmlDom.current}
      />
      <label htmlFor={htmlDom.current} className={css.adress}>
        {item.tipoDeZona} {item.colonia} {item.estado} {item.municipio}
      </label>
    </div>
  );
}

export { Address };
