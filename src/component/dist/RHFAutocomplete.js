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
var react_hook_form_1 = require("react-hook-form");
var Autocomplete_1 = require("@mui/material/Autocomplete");
var material_1 = require("@mui/material");
var RHFAutocomplete = function (props) {
    var control = props.control, options = props.options, name = props.name;
    return (React.createElement(react_hook_form_1.Controller, { name: name, control: control, rules: { required: true }, render: function (_a) {
            var _b;
            var field = _a.field, error = _a.fieldState.error;
            var onChang = field.onChang, value = field.value, ref = field.ref;
            return (React.createElement(Autocomplete_1["default"], { autoHighlight: true, value: value ? (_b = options.find(function (options) {
                    return value === options.id;
                })) !== null && _b !== void 0 ? _b : null : null, onChange: function (event, newValue) {
                    onChange(newValue ? newValue.id : null);
                }, getOptionLabel: function (options) {
                    return option.label;
                }, isOptionEqualToValue: function (options, newValue) {
                    return options.id === newValue.id;
                }, renderInput: function (params) { return (React.createElement(material_1.TextField, __assign({}, params, { inputRef: ref, error: !!error, helperText: error === null || error === void 0 ? void 0 : error.message, label: options.label, slotProps: {
                        htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                    } }))); } }));
        } }));
};
exports["default"] = RHFAutocomplete;
