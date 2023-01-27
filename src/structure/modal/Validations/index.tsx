import React, { useContext } from "react";
import { ContextModal } from "..";
import { Success, Invalid } from "../styles";

export const Validation = () => {
  const { cp } = useContext(ContextModal);
  if (cp.length === 0) return <></>;

  if (cp.length <= 4) return <Invalid>Codigo postal incompleto</Invalid>;

  return <Success>Codigo postal correcto</Success>;
};
