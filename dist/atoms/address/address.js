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
import { useRef } from "react";
import css from "./index.module.scss";
import { v4 as uuidv4 } from "uuid";
function Address(_a) {
    var item = _a.item, onChange = _a.onChange;
    var htmlDom = useRef(uuidv4());
    return (_jsxs("div", __assign({ className: css.containerAdress }, { children: [_jsx("input", { onChange: function (e) { return onChange(item); }, type: "radio", name: "infoaddress", id: htmlDom.current }), _jsxs("label", __assign({ htmlFor: htmlDom.current, className: css.adress }, { children: [item.tipoDeZona, " ", item.colonia, " ", item.estado, " ", item.municipio] }))] })));
}
export { Address };
