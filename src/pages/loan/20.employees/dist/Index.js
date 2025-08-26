"use strict";
exports.__esModule = true;
var React = require("react");
var Typography_1 = require("@mui/material/Typography");
var Datagrid_1 = require("./Datagrid");
var material_1 = require("@mui/material");
var Item_1 = require("../../../component/Item");
function User() {
    return React.createElement(React.Fragment, null,
        React.createElement(Typography_1["default"], null, "Contorller"),
        React.createElement(material_1.Grid, { container: true, spacing: 2 },
            React.createElement(material_1.Grid, { item: true, xs: 8 },
                React.createElement(Item_1["default"], { sx: { boxShadow: 3 } },
                    React.createElement(Typography_1["default"], null, "\u0E88\u0EB3\u0E99\u0EA7\u0E99\u0EC0\u0E87\u0EB4\u0E99\u0E97\u0EB1\u0E87\u0EDD\u0EBB\u0E94\u0EA2\u0EB9\u0EC8\u0EA1\u0EB0\u0E99\u0EB2\u0E84\u0EB2\u0E99"))),
            React.createElement(material_1.Grid, { item: true, xs: 4 },
                React.createElement(Item_1["default"], { sx: { boxShadow: 3 } },
                    React.createElement(Typography_1["default"], null, "\u0E88\u0EB3\u0E99\u0EA7\u0E99\u0EC0\u0E87\u0EB4\u0E99\u0EC3\u0E99\u0EA5\u0EB0\u0E9A\u0EBB\u0E9A"))),
            React.createElement(material_1.Grid, { item: true, xs: 4 },
                React.createElement(Item_1["default"], { sx: { boxShadow: 3 } },
                    React.createElement(Typography_1["default"], null))),
            React.createElement(material_1.Grid, { item: true, xs: 8 },
                React.createElement(Item_1["default"], { sx: { boxShadow: 3 } }, "xs=8"))),
        React.createElement("br", null),
        React.createElement(Typography_1["default"], null, "\u0E95\u0EB2\u0E95\u0EB0\u0EA5\u0EB2\u0E87\u0E82\u0ECD\u0EC8\u0EA1\u0EB9\u0E99\u0EC0\u0EA1\u0EB7\u0EAD\u0E87"),
        React.createElement(Datagrid_1["default"], null));
}
exports["default"] = User;
