import React from 'react';
import scss from "./styles.module.scss";

export const PopUp = () => {
  return (
    <div className={scss.modalContainer}>
        <div className={scss.modal}>
            <div>header</div>
            <div>body</div>
            <div>footer</div>
        </div>
            
    </div>
  )
}
