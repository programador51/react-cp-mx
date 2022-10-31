import React from "react";
import useCp from "../../customHooks/useCp";
import { PropsComponentCp } from "./types";

// export const Cp = ({ onChange = () => {} }: PropsComponentCp) => {

// };

function Cp({ onChange , props = {} }: PropsComponentCp): JSX.Element {
  const { cp, handleOnChange } = useCp({ onChange });

  return (
    <>
    <label>Codigo Postal 
      </label>
    <input
      {...props}
      type="number"
      value={cp}
      minLength={5}
      maxLength={5}
      onChange={(e) => handleOnChange(e.target.value)}
    />
    </>
    
  );  
}

export { Cp };
