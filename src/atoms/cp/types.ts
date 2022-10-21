import { Cp } from "../../helpers/apis/cp/interfaces";

export interface PropsComponentCp {
  /**
   * Funcion que devuelve algo...
   */
  onChange?: (listOfAddresses: Cp[]) => void;
}
