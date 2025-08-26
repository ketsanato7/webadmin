"use strict";
exports.__esModule = true;
var React = require("react");
var Typography_1 = require("@mui/material/Typography");
var Datagrid_1 = require("./Datagrid");
var importMaster_1 = require("./importMaster");
var Context_1 = require("../../../context/Context");
function User() {
    var _a = React.useState(), UserData = _a[0], setUserData = _a[1];
    return React.createElement(React.Fragment, null,
        React.createElement(Context_1.UserContext.Provider, { value: { UserData: UserData, setUserData: setUserData } },
            React.createElement(Typography_1["default"], null, "Contorller"),
            React.createElement("br", null),
            React.createElement(importMaster_1["default"], null),
            React.createElement(Typography_1["default"], null, "Table"),
            React.createElement(Datagrid_1["default"], null)));
}
exports["default"] = User;
