import React , { useState } from "react";
import { AddressI } from "../../molecules/listadresses/types";
import { savepositionaddress } from "./saveaddress";
import css from "./index.module.scss";
import { PropsAdressListItem } from "./types";
import {v4 as uuidv4} from "uuid";

function Address({ item, index, onChange  }: PropsAdressListItem):any {

  const [htmlDom,setHtmlDom] = useState(uuidv4());
  // index provisional para saber la posición de cada valor
  return (
    <div className={css.containerAdress}>
    <input onChange={e=>onChange(item)} type="radio" name="infoaddress" id={htmlDom}/>
      <label htmlFor={htmlDom} className={css.adress}>
        {item.tipoDeZona} {item.colonia} {item.estado} {item.municipio}
      </label>
      
    </div>

    /*
            <tr>
      <th>Tipo de Zona</th> 
      <th>Colonia</th>
      <th>Estado</th>
      <th>Municipio</th>
      <th>Posición</th>
    </tr>
     <tr>
      <th><input type="radio" name="infoaddress" id={index} value={index} /></th>
      <th>{item.tipoDeZona}</th>
      <th>{item.colonia}</th>
      <th>{item.estado}</th>
      <th>{item.municipio}</th>
      <th>{index}</th>
    </tr>  
    */
  );
}

export { Address };
