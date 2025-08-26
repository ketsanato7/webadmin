"use strict";
exports.__esModule = true;
var React = require("react");
var Dialog_1 = require("@mui/material/Dialog");
var DialogContent_1 = require("@mui/material/DialogContent");
var DialogTitle_1 = require("@mui/material/DialogTitle");
var styles_1 = require("@mui/material/styles");
var icons_material_1 = require("@mui/icons-material");
var material_1 = require("@mui/material");
var react_toastify_1 = require("react-toastify");
var dailog_1 = require("../../../component/dailog");
var Insert_1 = require("./Insert");
var steps = [
    {
        label: "1.personal_info",
        description: "For each ad campaign that you create, you can control how much\n              you're willing to spend on clicks and conversions, which networks\n              and geographical locations you want your ads to show on, and more.",
        contaner: (React.createElement(React.Fragment, null,
            React.createElement(Insert_1["default"], null)))
    },
    {
        label: "2.lao_id_cards",
        description: "An ad group contains one or more ads which target a shared set of keywords.",
        contaner: (React.createElement(React.Fragment, null))
    },
    {
        label: "Create an ad",
        description: "Try out different ad text to see what brings in the most customers,\n              and learn how to enhance your ads using features like ad extensions.\n              If you run into any problems with your ads, find out how to tell if\n              they're running and how to resolve approval issues."
    },
];
function DraggableDialog(_a) {
    var porps = _a.porps;
    var _b = React.useState([]), data = _b[0], setData = _b[1];
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    var handleClickOpenInsert = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    var theme = styles_1.useTheme();
    var _d = React.useState(0), activeStep = _d[0], setActiveStep = _d[1];
    var maxSteps = steps.length;
    var handleNext = function () {
        setActiveStep(function (prevActiveStep) { return prevActiveStep + 1; });
    };
    var handleBack = function () {
        setActiveStep(function (prevActiveStep) { return prevActiveStep - 1; });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Button, { variant: "outlined", sx: { width: "10ch" }, type: "submit", startIcon: React.createElement(icons_material_1.Add, null), onClick: handleClickOpenInsert }, "Add"),
        React.createElement(Dialog_1["default"], { maxWidth: "sx", open: open, onClose: handleClose, PaperComponent: dailog_1["default"], "aria-labelledby": "draggable-dialog-title" },
            React.createElement(DialogTitle_1["default"], { style: { cursor: "move" }, id: "draggable-dialog-title" }, "Insert"),
            React.createElement(material_1.IconButton, { "aria-label": "fingerprint", color: "error", onClick: handleClose, sx: function (theme) { return ({
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500]
                }); } },
                React.createElement(icons_material_1.Cancel, null)),
            React.createElement(DialogContent_1["default"], { dividers: true },
                React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 2 }, direction: "row", useFlexGap: true, sx: { flexWrap: 'wrap' } },
                    React.createElement(material_1.Typography, null, steps[activeStep].label),
                    steps[activeStep].description,
                    steps[activeStep].contaner),
                React.createElement(react_toastify_1.ToastContainer, null)),
            React.createElement(material_1.MobileStepper, { variant: "text", steps: maxSteps, position: "static", activeStep: activeStep, nextButton: React.createElement(material_1.Button, { size: "small", onClick: handleNext, disabled: activeStep === maxSteps - 1 },
                    "Next",
                    theme.direction === "rtl" ? (React.createElement(icons_material_1.KeyboardArrowLeft, null)) : (React.createElement(icons_material_1.KeyboardArrowRight, null))), backButton: React.createElement(material_1.Button, { size: "small", onClick: handleBack, disabled: activeStep === 0 },
                    theme.direction === "rtl" ? (React.createElement(icons_material_1.KeyboardArrowRight, null)) : (React.createElement(icons_material_1.KeyboardArrowLeft, null)),
                    "Back") }))));
}
exports["default"] = DraggableDialog;
