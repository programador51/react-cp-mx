import React, { useState } from "react";
import { ModalCp } from "./structure/modal";

export const ModalDemo = () => {
  const [address, setAddress] = useState<any>({});

  return (
    <>
      <ModalCp onChange={setAddress} />
      <hr />
      <p>Información del código postal</p>
      <pre>
        <code>
          <p>{JSON.stringify(address, null, 2)}</p>
        </code>
      </pre>
      <hr />
    </>
  );
};
