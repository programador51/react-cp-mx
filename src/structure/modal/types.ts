import { Cp } from "../../helpers/apis/cp/interfaces";
import { AddressI } from "../../molecules/listadresses/types";

export interface TypesContextModal {
  cp: string;
}

export interface onChangeModalCp extends AddressI {
  cp: string;
}

export interface PropsModalCp {
  onChange?: (address: onChangeModalCp) => void;
  /**
   * A callback that executes and returns the information needed to display the list of addresses
   */
  fetchResource?: ((cp: string) => Promise<Cp[]>) | null;
}
