import React, { useState } from "react";
import { Cp } from "./atoms/cp";

export const FetchDemo = () => {
  const [data, setData] = useState<any>([]);

  return (
    <>
      <Cp
        onChange={(list, cp, a) => setData(list)}
        fetchResource={async (cp) => {
          return [
            {
              codigoPostal: "64720",
              municipio: {
                nombre: "Monterrey",
                codigo: "039",
                clave: "07",
              },
              colonia: "Unión Miguel Barrera",
              codigoOficina: "64821",
              estado: {
                nombre: "Nuevo León",
                codigo: "19",
              },
              asenta: {
                nombre: "Colonia",
                tipo: "09",
              },
              tipoDeZona: "Urbano",
            },
            {
              codigoPostal: "64720",
              municipio: {
                nombre: "Monterrey",
                codigo: "039",
                clave: "07",
              },
              colonia: "Benito Juárez (F-96)",
              codigoOficina: "64821",
              estado: {
                nombre: "Nuevo León",
                codigo: "19",
              },
              asenta: {
                nombre: "Colonia",
                tipo: "09",
              },
              tipoDeZona: "Urbano",
            },
          ];
        }}
      />

      <details>
        <summary>Lista de un excel</summary>
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </details>
    </>
  );
};
