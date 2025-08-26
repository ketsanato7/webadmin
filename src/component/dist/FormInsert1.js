"use strict";
exports.__esModule = true;
var React = require("react");
var Dialog_1 = require("@mui/material/Dialog");
var DialogContent_1 = require("@mui/material/DialogContent");
var DialogTitle_1 = require("@mui/material/DialogTitle");
var icons_material_1 = require("@mui/icons-material");
var material_1 = require("@mui/material");
var dailog_1 = require("./dailog");
var react_toastify_1 = require("react-toastify");
function FormWrapper(_a) {
    var title = _a.title, children = _a.children;
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    var form1 = React.useRef();
    var handleClickOpenInsert = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Button, { variant: "outlined", sx: { width: "10ch" }, type: "submit", startIcon: React.createElement(icons_material_1.Add, null), onClick: handleClickOpenInsert }, "Add"),
        React.createElement(Dialog_1["default"], { maxWidth: "sx", fullWidth: true, open: open, onClose: handleClose, PaperComponent: dailog_1["default"], "aria-": "draggable-dialog-title" },
            React.createElement(DialogTitle_1["default"], { style: { cursor: "move" }, id: "draggable-dialog-title" },
                "Insert  ",
                title),
            React.createElement(material_1.IconButton, { "aria-label": "fingerprint", color: "error", onClick: handleClose, sx: function (theme) { return ({
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500]
                }); } },
                React.createElement(icons_material_1.Cancel, null)),
            React.createElement(DialogContent_1["default"], { dividers: true },
                React.createElement(material_1.Box, null, children))),
        React.createElement(react_toastify_1.ToastContainer, null)));
}
exports["default"] = FormWrapper;
