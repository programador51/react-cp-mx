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
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { ContextModal } from '..';
import scss from "../index.module.scss";
export var Validation = function () {
    var cp = useContext(ContextModal).cp;
    if (cp.length === 0)
        return _jsx(_Fragment, {});
    if (cp.length <= 4)
        return _jsx("p", __assign({ className: scss.fracaso }, { children: "Codigo postal incompleto" }));
    return _jsx("p", __assign({ className: scss.exito }, { children: "Codigo postal correcto" }));
};
