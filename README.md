# Input

## [Demo](https://endearing-starlight-bdcb69.netlify.app/?path=/story/cp-input--page)

No tiene ningun estilo, pero es completamente customizable. Este componente puede recibir todas las propiedades de un elemento `input`

```tsx
import { Cp } from "react-cp-mexico";

export const MyApp = () => {
  const [address, setAddress] = useState({
    cp: "",
    addresses: [],
  });

  return (
    <Cp
      onChange={(list, cp, a) =>
        setAdress((state) => ({
          ...state,
          cp,
          addresses: list,
        }))
      }
      props={{
        placeholder: "Escribe aquí!",
        id: "SoySoloUnId",
        name: "TambienTengoUnName",
        value: 64720,
      }}
    />
  );
};
```

---

# Modal

## [Demo](https://endearing-starlight-bdcb69.netlify.app/?path=/story/cp-modal--page)

Con este componente se renderiza un input `numerico` que muestra una pantalla modal al terminar de escribir los 5 dígitos.

```tsx
import { ModalCp } from "react-cp-mexico";
import React, { useState } from "react";

export const MyApp = () => {
  const [address, setAddress] = useState<onChangeModalCp>({
    colonia: "",
    estado: "",
    municipio: "",
    tipoDeZona: "",
    cp: "",
  });

  return <ModalCp onChange={setAddress} />;
};
```

---

# Fetch

## [Demo](https://endearing-starlight-bdcb69.netlify.app/)

Por defecto, la librería hace uso del API de Amplus. Pero, se puede hacer inyecion de la informacion siempre y cuando
se respete el tipado que requiere la propiedad `fetchResource`. Asi se puede leer desde un excel, json, api, etc.

### Código

El ejemplo siguiente toma el parametro del `cp` para hacer la busqueda, retorna una lista en crudo, pero debería ir el código que se encargar de hacer la busqueda, leer un excel, llamar un api diferente, etc.

```tsx
import React, { useState } from "react";
import { Cp } from "react-cp-mexico";

export const FetchDemo = () => {
  const [data, setData] = useState([]);

  return (
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
  );
};
```
