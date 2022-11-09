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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { parseAddresses } from "../../helpers/cp";
import { Listadresses } from "../../molecules/listadresses/listadresses";
import scss from "./styles.module.scss";
import { SpinnerCircular } from "spinners-react";
/**
 * Render a modal with the list of available addresses
 * @param props - Props
 * @param props.onConfirm - It triggers when user clicks "Aceptar" or close button
 * @returns {JSX.Element}
 */
export var PopUp = function (_a) {
    var _b = _a.addresses, addresses = _b === void 0 ? [] : _b, _c = _a.onConfirm, onConfirm = _c === void 0 ? function () { } : _c, _d = _a.isQueryDone, isQueryDone = _d === void 0 ? false : _d;
    var EMPTY_ADDRESS = {
        colonia: "",
        estado: "",
        municipio: "",
        tipoDeZona: "",
    };
    var _e = useState(EMPTY_ADDRESS), optionSelected = _e[0], setOptionSelected = _e[1];
    return (_jsx("div", __assign({ className: scss.modalContainer }, { children: _jsxs("div", __assign({ className: scss.modal }, { children: [_jsxs("div", __assign({ className: scss.header }, { children: [_jsx("h2", __assign({ className: scss.title }, { children: "C\u00F3digos Postales" })), _jsx("button", __assign({ className: scss.close, onClick: function (e) { return onConfirm(EMPTY_ADDRESS); } }, { children: _jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6" }, { children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) })) }))] })), _jsx("div", __assign({ className: scss.body }, { children: !isQueryDone ? (_jsxs("div", __assign({ className: scss.spinner }, { children: [_jsx("p", { children: "Cargando" }), _jsx(SpinnerCircular, {})] }))) : (_jsx(Listadresses, { addresses: parseAddresses(addresses), onChange: function (address) { return setOptionSelected(address); } })) })), _jsx("div", __assign({ className: scss.footer }, { children: _jsx("button", __assign({ onClick: function (e) { return onConfirm(optionSelected); }, className: scss.accept, disabled: optionSelected.colonia === "" }, { children: "Aceptar" })) }))] })) })));
};
