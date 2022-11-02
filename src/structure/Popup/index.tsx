import React from 'react';
import scss from "./styles.module.scss";

export const PopUp = () => {
  return (
    <div className={scss.modalContainer}>
        <div className={scss.modal}>
            <div className={scss.header}>
              <h1 className={scss.title}>Header</h1>
              <button className={scss.close}>X</button>
            </div>
            <div className={scss.body}>body</div>
            <div className={scss.footer}>
              footer
              <button className={scss.continue}>Continuar</button>
            </div>
        </div>
            
    </div>
  )
}
