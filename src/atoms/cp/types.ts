import { Cp } from "../../helpers/apis/cp/interfaces";

export interface PropsComponentCp {
  /**
   * Funcion que devuelve algo...
   */
  onChange?: (listOfAddresses: Cp[],cp:string) => void;

  props?:React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
}
