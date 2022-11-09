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
import { useState, createContext, useEffect } from "react";
import { Cp } from "../../atoms/cp";
import { PopUp } from "../Popup";
import scss from "./index.module.scss";
import { Validation } from "./Validations";
export var ContextModal = createContext({
    cp: "",
});
var Provider = ContextModal.Provider;
var ModalCp = function (_a) {
    var _b = _a.onChange, onChange = _b === void 0 ? function () { } : _b, _c = _a.fetchResource, fetchResource = _c === void 0 ? null : _c;
    var _d = useState([]), Values = _d[0], SetAllValues = _d[1];
    var _e = useState(false), isQueryDone = _e[0], setIsQueryDone = _e[1];
    var _f = useState(false), showModal = _f[0], setShowModal = _f[1];
    var _g = useState(""), cp = _g[0], setCp = _g[1];
    useEffect(function () {
        if (cp.length === 5)
            setShowModal(true);
    }, [cp]);
    return (_jsxs(Provider, __assign({ value: {
            cp: cp,
        } }, { children: [showModal ? (_jsx(PopUp, { addresses: Values, isQueryDone: isQueryDone, onConfirm: function (adress) {
                    setShowModal(false);
                    // const onChangeValue:onChangeModalCp = {
                    //   colonia:adress.colonia,
                    //   estado:adress.estado,
                    //   municipio:adress.municipio,
                    //   tipoDeZona:adress.tipoDeZona,
                    //   cp
                    // }
                    // const onChangeValue:onChangeModalCp = {
                    //   ...adress,
                    //   cp:cp
                    // }
                    var onChangeValue = __assign(__assign({}, adress), { cp: cp });
                    onChange(onChangeValue);
                } })) : null, _jsxs("div", __assign({ className: scss.container }, { children: [_jsx("label", { children: "Codigo postal" }), _jsx(Cp, { fetchResource: fetchResource, onChange: function (list, cp, loaded) {
                            SetAllValues(list);
                            setCp(cp);
                            setIsQueryDone(loaded);
                        }, props: {
                            placeholder: "Solo números, ejemplo: 64720",
                        } }), _jsx(Validation, {})] }))] })));
};
export { ModalCp };
