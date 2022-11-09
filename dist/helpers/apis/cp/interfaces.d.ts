export interface Cp {
    "codigoPostal": string;
    "municipio": {
        "nombre": string;
        "codigo": string;
        "clave": string;
    };
    "colonia": string;
    "codigoOficina": string;
    "estado": {
        "nombre": string;
        "codigo": string;
    };
    "asenta": {
        "nombre": string;
        "tipo": string;
    };
    "tipoDeZona": string;
}
