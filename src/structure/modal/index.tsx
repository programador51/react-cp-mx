import React , { useState , createContext } from 'react';
import { Cp } from "../../atoms/cp";
import { Cp as CpTyping } from "../../helpers/apis/cp/interfaces";
import scss from "./index.module.scss";
import { Validation } from './Validations';

export const ContextModal = createContext({
    cp:""
});
const { Provider } = ContextModal;

const ModalCp = () => {

    const [Values, SetAllValues] = useState<CpTyping[]>([]);
    
const [cp,setCp] = useState("");

    return (
        <Provider value={{
            cp
        }}>
        <div className={scss.container}>
            <Cp 
            onChange={(list,cp) =>{
                SetAllValues(list);
                setCp(cp)
            }}
            props={{
                placeholder:"Solo números, ejemplo: 64720"
            }}/>
            <Validation/>
            {/* {cp.length <= 4 ? <p className={scss.fracaso}>Codigo postal incompleto</p> : <p className={scss.exito}>Codigo postal correcto</p>} */}
            
            </div>
            </Provider>
    )
}

export {
    ModalCp
}