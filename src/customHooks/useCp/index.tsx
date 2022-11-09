import { useState } from "react";
import { getAdresses } from "../../helpers/apis/cp/cp";
import { ValuesCustomHookUseCp } from "./types";

function useCp({
  onChange = () => {},
  fetchResource = null,
  valueParam = "",
}: ValuesCustomHookUseCp) {
  const [cp, setValue] = useState(valueParam);

  const handleOnChange = async (cp: string) => {
    const cpValidated = cp.substring(0, 5);

    setValue(cpValidated);

    if (cp.length < 5) {
      onChange([], cpValidated, true);
      return;
    }

    onChange([], cpValidated, false);

    const fetchFunctionToUse =
      fetchResource === null ? getAdresses : fetchResource;

    const listAdresses = await fetchFunctionToUse(cpValidated);
    onChange(listAdresses, cpValidated, true);
  };

  return {
    cp,
    handleOnChange,
  };
}

export default useCp;
