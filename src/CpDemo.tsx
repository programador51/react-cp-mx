import React, { useState } from "react";
import { Cp } from "./atoms/cp";

export const CpDemo = () => {
  const [data, setData] = useState<any>([]);
  const [cp, setCp] = useState<any>("");
  const [loading, setIsLoading] = useState(false);

  return (
    <>
      <Cp
        onChange={(list, cp, a) => {
          setData(list);
          setCp(cp);
          setIsLoading(a);
        }}
        props={{
          placeholder: "Escribe aquí!",
          id: "SoySoloUnId",
          name: "TambienTengoUnName",
          value: 64720,
        }}
      />

      <details>
        <summary>Lista de direcciones</summary>
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </details>

      <p>¿ Api consultado ? : {loading ? "true" : "false"}</p>

      <p>Código postal: {cp}</p>
    </>
  );
};
