import React , { useContext } from 'react';
import { ContextModal } from '..';
import scss from "../index.module.scss";

export const Validation = () => {

  const { cp } = useContext(ContextModal);
if ( cp.length === 0) return <></>

if(cp.length <= 4) return <p className={scss.fracaso}>Codigo postal incompleto</p> 

return <p className={scss.exito}>Codigo postal correcto</p>
}
