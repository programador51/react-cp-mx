import { Cp } from "../../helpers/apis/cp/interfaces";

export interface ValuesCustomHookUseCp {
  onChange?: (listOfAddresses: Cp[],cp:string) => void;
}
