import { ValuesCustomHookUseCp } from "./types";
declare function useCp({ onChange, fetchResource, valueParam, }: ValuesCustomHookUseCp): {
    cp: string | number | readonly string[];
    handleOnChange: (cp: string) => Promise<void>;
};
export default useCp;
