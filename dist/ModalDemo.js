import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ModalCp } from "./structure/modal";
export var ModalDemo = function () {
    var _a = useState({}), address = _a[0], setAddress = _a[1];
    return (_jsxs(_Fragment, { children: [_jsx(ModalCp, { onChange: setAddress }), _jsx("hr", {}), _jsx("p", { children: "Informaci\u00F3n del c\u00F3digo postal" }), _jsx("pre", { children: _jsx("code", { children: _jsx("p", { children: JSON.stringify(address, null, 2) }) }) }), _jsx("hr", {})] }));
};
