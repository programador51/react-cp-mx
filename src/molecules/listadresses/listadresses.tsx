import React , {useState} from "react";
import { PropsListadresses } from "./types";
import { Address } from "../../atoms/address/address";


function Listadresses({ addresses = [] }: PropsListadresses) {
  if (addresses.length === 0) return <p>No hay datos</p>;
  // const [dataselected, setdataselect] = useState("");

  return (
    <div>
      
      {
        addresses.map((item, index)=> (
          <Address item={item} index={index} 
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
