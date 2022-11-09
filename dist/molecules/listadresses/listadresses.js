var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { Address } from "../../atoms/address/address";
import { v4 as uuidv4 } from "uuid";
function Listadresses(_a) {
    var _b = _a.addresses, addresses = _b === void 0 ? [] : _b, _c = _a.onChange, onChange = _c === void 0 ? function () { } : _c;
    var _d = useState(null), dataselected = _d[0], setdataselect = _d[1];
    var keyValue = useRef(uuidv4());
    useEffect(function () {
        if (addresses.length === 0)
            setdataselect(null);
    }, [addresses]);
    useEffect(function () {
        onChange(dataselected || {
            colonia: "",
            estado: "",
            municipio: "",
            tipoDeZona: "",
        });
    }, [dataselected]);
    if (addresses.length === 0)
        return _jsx("p", { children: "No hay datos" });
    return (_jsx("div", __assign({ style: {
            width: "100%",
            height: "100%",
        } }, { children: addresses.map(function (item, index) { return (_jsx(Address, { item: item, index: index, onChange: function (cityselected) { return setdataselect(cityselected); } }, "".concat(keyValue.current, "-").concat(index))); }) })));
}
export { Listadresses };
