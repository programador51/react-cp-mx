import React, { useState } from 'react'
import { getAdresses } from '../../helpers/apis/cp/cp';

export const Cp = () => {

    const [cp,setValue] = useState("");

    const handleOnChange = async(cp:string) => {

        const cpValidated = cp.substring(0,5);

        setValue(cpValidated);

        if(cp.length<5) return 

        const listAdresses = await getAdresses(cpValidated);
        console.log(listAdresses);
    }

  return (
    <input type="number" value={cp} min={5} max={5} onChange={e=>handleOnChange(e.target.value)}/>
  )
}
