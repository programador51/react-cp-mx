export interface AddressI {
  estado: string;
  municipio: string;
  colonia: string;
  tipoDeZona: string;
}

export interface PropsListadresses {
  addresses?: AddressI[];
  onChange?:(adress:AddressI)=>void;
}
