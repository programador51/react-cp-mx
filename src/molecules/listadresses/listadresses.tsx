import React , {useState , useEffect } from "react";
import { PropsListadresses } from "./types";
import { Address } from "../../atoms/address/address";
import {v4 as uuidv4} from "uuid";


function Listadresses({ addresses = [], onChange = () => {}  }: PropsListadresses):any {
  const [dataselected, setdataselect] = useState<any>(null);

  useEffect(()=>{
    if(addresses.length == 0) setdataselect(null);
  },[addresses]);

  useEffect(()=>{
    onChange(dataselected)
  },[dataselected])

  if (addresses.length === 0) return <p>No hay datos</p>;

  return (
    <div>
      {
        addresses.map((item, index)=> (
          <Address item={item} index={index} 
          key={uuidv4()}
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
