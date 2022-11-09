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
import useCp from "../../customHooks/useCp";
function Cp(_a) {
    var onChange = _a.onChange, _b = _a.fetchResource, fetchResource = _b === void 0 ? null : _b, _c = _a.props, props = _c === void 0 ? {} : _c;
    var _d = useCp({
        onChange: onChange,
        fetchResource: fetchResource,
        valueParam: (props === null || props === void 0 ? void 0 : props.value) || "",
    }), cp = _d.cp, handleOnChange = _d.handleOnChange;
    return (_jsx("input", __assign({}, props, { type: "number", value: cp, minLength: 5, maxLength: 5, min: 0, onChange: function (e) { return handleOnChange(e.target.value); } })));
}
export { Cp };
