import React from "react";
import { AddressI } from "../../molecules/listadresses/types";

function Address({ item }: { item: AddressI }) {
  return (
    <p>
      {item.tipoDeZona} {item.colonia} {item.estado} {item.municipio}
    </p>
  );
}

export { Address };
