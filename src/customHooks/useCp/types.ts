import { Cp } from "../../helpers/apis/cp/interfaces";

export interface ValuesCustomHookUseCp {
  onChange?: (listOfAddresses: Cp[], cp: string) => void;

  /**
   * A callback that executes and returns the information needed to display the list of addresses
   */
  fetchResource?: ((cp: string) => Promise<Cp[]>) | null;
}
