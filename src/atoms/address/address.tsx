import React from "react";
import { AddressI } from "../../molecules/listadresses/types";
import { savepositionaddress } from "./saveaddress";


function Address({ item, index }: { item: AddressI, index: any }) { // index provisional para saber la posición de cada valor
  return (
    <>
 <label className="dataaddress" htmlFor={index}>
        {item.tipoDeZona} {item.colonia} {item.estado} {item.municipio} {index}
      </label>
      <input type="radio" name="infoaddress" id={index} value={index} onClick={} /><br/>


    </>

  
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
