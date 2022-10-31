import { AddressI } from "../../molecules/listadresses/types";

export interface PropsAdressListItem{
    item:AddressI;
index:number|string;
onChange:(item:AddressI)=>void;
}