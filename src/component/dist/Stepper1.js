"use strict";
exports.__esModule = true;
var React = require("react");
var Box_1 = require("@mui/material/Box");
var styles_1 = require("@mui/material/styles");
var MobileStepper_1 = require("@mui/material/MobileStepper");
var Paper_1 = require("@mui/material/Paper");
var Typography_1 = require("@mui/material/Typography");
var Button_1 = require("@mui/material/Button");
var KeyboardArrowLeft_1 = require("@mui/icons-material/KeyboardArrowLeft");
var KeyboardArrowRight_1 = require("@mui/icons-material/KeyboardArrowRight");
var steps = [
    {
        label: 'Select campaign settings',
        description: "For each ad campaign that you create, you can control how much\n              you're willing to spend on clicks and conversions, which networks\n              and geographical locations you want your ads to show on, and more.", contaner: React.createElement(React.Fragment, null,
            React.createElement(Button_1["default"], { variant: "outlined" }, "Outlined"),
            "              ")
    },
    {
        label: 'Create an ad group',
        description: 'An ad group contains one or more ads which target a shared set of keywords.'
    },
    {
        label: 'Create an ad',
        description: "Try out different ad text to see what brings in the most customers,\n              and learn how to enhance your ads using features like ad extensions.\n              If you run into any problems with your ads, find out how to tell if\n              they're running and how to resolve approval issues."
    },
];
function TextMobileStepper() {
    var theme = styles_1.useTheme();
    var _a = React.useState(0), activeStep = _a[0], setActiveStep = _a[1];
    var maxSteps = steps.length;
    var handleNext = function () {
        setActiveStep(function (prevActiveStep) { return prevActiveStep + 1; });
    };
    var handleBack = function () {
        setActiveStep(function (prevActiveStep) { return prevActiveStep - 1; });
    };
    return (React.createElement(Box_1["default"], { sx: { maxWidth: 400, flexGrow: 1 } },
        React.createElement(Paper_1["default"], { square: true, elevation: 0, sx: {
                display: 'flex',
                alignItems: 'center',
                height: 50,
                pl: 2,
                bgcolor: 'background.default'
            } },
            React.createElement(Typography_1["default"], null, steps[activeStep].label)),
        React.createElement(Box_1["default"], { sx: { height: 255, maxWidth: 400, width: '100%', p: 2 } }, steps[activeStep].description),
        React.createElement(MobileStepper_1["default"], { variant: "text", steps: maxSteps, position: "static", activeStep: activeStep, nextButton: React.createElement(Button_1["default"], { size: "small", onClick: handleNext, disabled: activeStep === maxSteps - 1 },
                "Next",
                theme.direction === 'rtl' ? (React.createElement(KeyboardArrowLeft_1["default"], null)) : (React.createElement(KeyboardArrowRight_1["default"], null))), backButton: React.createElement(Button_1["default"], { size: "small", onClick: handleBack, disabled: activeStep === 0 },
                theme.direction === 'rtl' ? (React.createElement(KeyboardArrowRight_1["default"], null)) : (React.createElement(KeyboardArrowLeft_1["default"], null)),
                "Back") })));
}
exports["default"] = TextMobileStepper;
