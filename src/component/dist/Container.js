"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
function Container(title, _a) {
    var children = _a.children;
    return (react_1["default"].createElement(material_1.Box, null,
        react_1["default"].createElement(Typography, null, title),
        react_1["default"].createElement(Typography, null, "\u0E95\u0EB2\u0E95\u0EB0\u0EA5\u0EB2\u0E87\u0E82\u0ECD\u0EC8\u0EA1\u0EB9\u0E99\u0EC0\u0EA1\u0EB7\u0EAD\u0E87"),
        children));
}
exports["default"] = Container;
