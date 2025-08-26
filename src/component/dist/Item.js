"use strict";
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
exports.__esModule = true;
var styles_1 = require("@mui/material/styles");
var Paper_1 = require("@mui/material/Paper");
var Item = styles_1.styled(Paper_1["default"])(function (_a) {
    var _b;
    var theme = _a.theme;
    return (__assign(__assign(__assign({ backgroundColor: '#fff' }, theme.typography.body2), { padding: theme.spacing(1), textAlign: 'center', color: ((_b = theme.vars) !== null && _b !== void 0 ? _b : theme).palette.text.secondary }), theme.applyStyles('dark', {
        backgroundColor: '#1A2027'
    })));
});
exports["default"] = Item;
