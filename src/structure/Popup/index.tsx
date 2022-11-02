import React, { useState } from "react";
import scss from "./styles.module.scss";

export const PopUp = () => {
  return (
    <div className={scss.modalContainer}>
      <div className={scss.modal}>
        <div className={scss.header}>
          <h2 className={scss.title}>Codigos Postales</h2>
          <button className={scss.close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className={scss.body}>
          <p>Datos de Codigo Postal</p>
        </div>
        <div className={scss.footer}>
          <button className={scss.accept} disabled={true}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};
