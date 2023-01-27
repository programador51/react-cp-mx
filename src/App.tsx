import React from "react";
import "./App.css";
import "./index.css";

import { ModalCp } from "./structure/modal";

function App() {
  return (
    <div>
      <ModalCp />
      <p
        style={{
          fontFamily: "var(--NunitoSans)",
        }}
      >
        Hola
      </p>
    </div>
  );
}

export default App;
