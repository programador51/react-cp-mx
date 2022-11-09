/// <reference types="react" />
import { PropsPopUp } from "./types";
/**
 * Render a modal with the list of available addresses
 * @param props - Props
 * @param props.onConfirm - It triggers when user clicks "Aceptar" or close button
 * @returns {JSX.Element}
 */
export declare const PopUp: ({ addresses, onConfirm, isQueryDone, }: PropsPopUp) => JSX.Element;
