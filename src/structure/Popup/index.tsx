import React, { useState } from 'react';
import scss from "./styles.module.scss";

export const PopUp = () => {

  return (
    <div className={scss.modalContainer}>
        <div className={scss.modal}>
            <div className={scss.header}>
              <h1 className={scss.title}>Codigos Postales</h1>
              <button className={scss.close}>x</button>
            </div>
            <div className={scss.body}>Datos de Codigo Postal</div>
            <div className={scss.footer}>
              <button className={scss.accept}>Aceptar</button>
            </div>
        </div>
            
    </div>
  )
}
