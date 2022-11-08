import { Cp as CpTyping } from "../../helpers/apis/cp/interfaces";
import { AddressI } from "../../molecules/listadresses/types";

export interface PropsPopUp {
  addresses?: CpTyping[];
  onConfirm?: (address: AddressI) => void;
}
