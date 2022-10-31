import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Cp } from "./atoms/cp";
import { Cp as CpTyping } from "./helpers/apis/cp/interfaces";
import { Listadresses } from "./molecules/listadresses/listadresses";
import { parseAddresses } from "./helpers/cp";
import { ModalCp } from "./structure/modal"
import { PopUp } from "./structure/Popup"

// RETOS
// [x] - 1. Al borrar el CP des-aparecer los resultados
// [x] - 2. Estilos a la lista
// [] - 3. Seleccionar una direccion una recuperarlo con un callback

// [x] - 1. Obtener el CP en un scope mas arriba
// [x] - 1.1 Guardar "list" en un useState de App.tsx
// [x] - 2. Pasar la lista al componente de lista cp
// [x] - 3. Renderizar la lista

function App() {
  const [Values, SetAllValues] = useState<CpTyping[]>([]);
  const [addressSelected, setAddressSelected] = useState(undefined);

  return (
    <div className="App">
      {/* <ModalCp/> */}
      <PopUp/>
      {/* <Cp onChange={(list) => SetAllValues(list)} />
      <Listadresses addresses={parseAddresses(Values)} onChange={value=>console.log('Hola!, esta es mi direccion',value)}/> */}
    </div>
  );
}

export default App;
