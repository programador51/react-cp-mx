/// <reference types="react" />
import { Cp } from "../../helpers/apis/cp/interfaces";
export interface PropsComponentCp {
    /**
     * Funcion que devuelve algo...
     */
    onChange?: (listOfAddresses: Cp[], cp: string, isQueryDone: boolean) => void;
    props?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    /**
     * A callback that executes and returns the information needed to display the list of addresses
     */
    fetchResource?: ((cp: string) => Promise<Cp[]>) | null;
}
