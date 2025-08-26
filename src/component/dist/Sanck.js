"use strict";
exports.__esModule = true;
var React = require("react");
var Button_1 = require("@mui/material/Button");
var notistack_1 = require("notistack");
function MyApp() {
    var enqueueSnackbar = notistack_1.useSnackbar().enqueueSnackbar;
    var handleClick = function () {
        enqueueSnackbar('I love snacks.');
    };
    var handleClickVariant = function (variant) { return function () {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('This is a success message!', { variant: variant });
    }; };
    return (React.createElement(React.Fragment, null,
        React.createElement(Button_1["default"], { onClick: handleClick }, "Show snackbar"),
        React.createElement(Button_1["default"], { onClick: handleClickVariant('success') }, "Show success snackbar")));
}
function IntegrationNotistack() {
    return (React.createElement(notistack_1.SnackbarProvider, { maxSnack: 3 },
        React.createElement(MyApp, null)));
}
exports["default"] = IntegrationNotistack;
