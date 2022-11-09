import React from "react";
import { PropsModalCp } from "./types";
export declare const ContextModal: React.Context<{
    cp: string;
}>;
declare const ModalCp: ({ onChange, fetchResource, }: PropsModalCp) => JSX.Element;
export { ModalCp };
