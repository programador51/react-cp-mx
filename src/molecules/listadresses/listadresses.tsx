import React from "react";
import { PropsListadresses } from "./types";
import { Address } from "../../atoms/address/address";


function Listadresses({ addresses = [] }: PropsListadresses) {
  if (addresses.length === 0) return <p>No hay datos</p>;

  return (
    <div>
      
      {
        addresses.map((item, index)=> (
          <Address item={item} index={index} />
        ))}
      {/*addresses.map((item) => (
        <Address key=? item={item} />
      ))*/}
    </div>
  );
}

export { Listadresses };
