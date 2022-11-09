export var parseAddresses = function (listAddresses) {
    return listAddresses.map(function (address) { return ({
        colonia: address.colonia,
        estado: address.estado.nombre,
        municipio: address.municipio.nombre,
        tipoDeZona: address.tipoDeZona,
    }); });
};
