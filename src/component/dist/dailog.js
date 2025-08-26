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
var react_1 = require("react");
var react_draggable_1 = require("react-draggable");
var Paper_1 = require("@mui/material/Paper");
function PaperComponent(props) {
    var nodeRef = react_1["default"].useRef(null);
    return (react_1["default"].createElement(react_draggable_1["default"], { nodeRef: nodeRef, handle: "#draggable-dialog-title", cancel: '[class*="MuiDialogContent-root"]' },
        react_1["default"].createElement(Paper_1["default"], __assign({}, props, { ref: nodeRef }))));
}
exports["default"] = PaperComponent;
