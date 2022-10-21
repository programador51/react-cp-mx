import { AddressI } from "../../molecules/listadresses/types";
import { Cp } from "../apis/cp/interfaces";

export const parseAddresses = (listAddresses: Cp[]): AddressI[] =>
  listAddresses.map((address) => ({
    colonia: address.colonia,
    estado: address.estado.nombre,
    municipio: address.municipio.nombre,
    tipoDeZona: address.tipoDeZona,
  }));
