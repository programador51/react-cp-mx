import React, { useState, useEffect, useRef } from "react";
import { AddressI, PropsListadresses } from "./types";
import { Address } from "../../atoms/address/address";
import { v4 as uuidv4 } from "uuid";

function Listadresses({
  addresses = [],
  onChange = () => {},
}: PropsListadresses): any {
  const [dataselected, setdataselect] = useState<AddressI | null>(null);

  const keyValue = useRef(uuidv4());

  useEffect(() => {
    if (addresses.length == 0) setdataselect(null);
  }, [addresses]);

  useEffect(() => {
    onChange(
      dataselected || {
        colonia: "",
        estado: "",
        municipio: "",
        tipoDeZona: "",
      }
    );
  }, [dataselected]);

  if (addresses.length === 0) return <p>No hay datos</p>;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {addresses.map((item, index) => (
        <Address
          item={item}
          index={index}
          key={`${keyValue.current}-${index}`}
          onChange={(cityselected) => setdataselect(cityselected)}
          // onClick={() => dataselect()}
        />
      ))}
      {/*addresses.map((item) => (
        <Address key=? item={item} />
      ))*/}
    </div>
  );
}

export { Listadresses };
