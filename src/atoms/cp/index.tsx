import React from "react";
import useCp from "../../customHooks/useCp";
import { PropsComponentCp } from "./types";

function Cp({
  onChange,
  fetchResource = null,
  props = {},
}: PropsComponentCp): JSX.Element {
  const { cp, handleOnChange } = useCp({ onChange, fetchResource });

  return (
    <input
      {...props}
      type="number"
      value={cp}
      minLength={5}
      maxLength={5}
      min={0}
      onChange={(e) => handleOnChange(e.target.value)}
    />
  );
}

export { Cp };
