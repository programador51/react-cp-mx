import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Cp } from "./atoms/cp";
export var CpDemo = function () {
    var _a = useState([]), data = _a[0], setData = _a[1];
    var _b = useState(""), cp = _b[0], setCp = _b[1];
    var _c = useState(false), loading = _c[0], setIsLoading = _c[1];
    return (_jsxs(_Fragment, { children: [_jsx(Cp, { onChange: function (list, cp, a) {
                    setData(list);
                    setCp(cp);
                    setIsLoading(a);
                }, props: {
                    placeholder: "Escribe aquí!",
                    id: "SoySoloUnId",
                    name: "TambienTengoUnName",
                    value: 64720,
                } }), _jsxs("details", { children: [_jsx("summary", { children: "Lista de direcciones" }), _jsx("pre", { children: _jsx("code", { children: JSON.stringify(data, null, 2) }) })] }), _jsxs("p", { children: ["\u00BF Api consultado ? : ", loading ? "true" : "false"] }), _jsxs("p", { children: ["C\u00F3digo postal: ", cp] })] }));
};
