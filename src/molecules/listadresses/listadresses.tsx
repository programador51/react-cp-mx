import React from "react";
import { PropsListadresses } from "./types";
import { Address } from "../../atoms/address/address";

function Listadresses({ addresses = [] }: PropsListadresses) {
  if (addresses.length === 0) return <p>No hay datos</p>;

  return (
    <div>
      <p>Tipo de Zona, Colonia, Estado, Municipio</p>
      {addresses.map((item) => (
        <Address item={item} />
      ))}
    </div>
  );
}

export { Listadresses };
