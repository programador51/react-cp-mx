import React, { useState, createContext } from "react";
import { Cp } from "../../atoms/cp";
import { Cp as CpTyping } from "../../helpers/apis/cp/interfaces";
import scss from "./index.module.scss";
import { Validation } from "./Validations";

export const ContextModal = createContext({
  cp: "",
});
const { Provider } = ContextModal;

const ModalCp = () => {
  const [Values, SetAllValues] = useState<CpTyping[]>([]);

  const [cp, setCp] = useState("");

  return (
    <Provider
      value={{
        cp,
      }}
    >
      <div className={scss.container}>
        <label>Codigo postal</label>
        <Cp
          onChange={(list, cp) => {
            SetAllValues(list);
            setCp(cp);
          }}
          props={{
            placeholder: "Solo números, ejemplo: 64720",
          }}
        />
        <Validation />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores delectus rerum et tempora nobis nulla optio, impedit recusandae temporibus a voluptates obcaecati enim placeat eos natus, debitis incidunt. Distinctio voluptatum nobis nulla vitae. Corrupti, aut voluptatum? Porro odio sit eaque, quam corporis neque exercitationem rerum soluta harum qui voluptatem, rem, placeat perspiciatis dolorum veniam explicabo vero fugiat quasi totam aperiam! Non, mollitia. Pariatur, ullam quae maiores rem, itaque laborum quo minima error aut atque laboriosam in iure minus corporis consectetur adipisci assumenda beatae officia qui esse sunt hic temporibus at nostrum? Mollitia, obcaecati maxime illo ducimus dignissimos quod fuga.</p>
      </div>
    </Provider>
  );
};

export { ModalCp };
