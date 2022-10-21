import React from "react";
import useCp from "../../customHooks/useCp";
import { PropsComponentCp } from "./types";

// export const Cp = ({ onChange = () => {} }: PropsComponentCp) => {

// };

function Cp({ onChange }: PropsComponentCp): JSX.Element {
  const { cp, handleOnChange } = useCp({ onChange });

  return (
    <input
      type="number"
      value={cp}
      min={5}
      max={5}
      onChange={(e) => handleOnChange(e.target.value)}
    />
  );
}

export { Cp };
