import { useState, useEffect } from "react";
import { getAdresses } from "../../helpers/apis/cp/cp";
import { ValuesCustomHookUseCp } from "./types";

function useCp({
  onChange = () => {},
  fetchResource = null,
}: ValuesCustomHookUseCp) {
  const [cp, setValue] = useState("");

  const handleOnChange = async (cp: string) => {
    const cpValidated = cp.substring(0, 5);

    setValue(cpValidated);

    if (cp.length < 5) {
      onChange([], cpValidated);
      return;
    }

    const fetchFunctionToUse =
      fetchResource === null ? getAdresses : fetchResource;

    const listAdresses = await fetchFunctionToUse(cpValidated);
    onChange(listAdresses, cpValidated);
  };

  return {
    cp,
    handleOnChange,
  };
}

export default useCp;
