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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = require("react");
var react_hook_form_1 = require("react-hook-form");
var material_1 = require("@mui/material");
var react_toastify_1 = require("react-toastify");
var zod_1 = require("@hookform/resolvers/zod");
var FormInsert1_1 = require("../../../component/FormInsert1");
var apiMonday_1 = require("../../../api/apiMonday");
var _2_lao_id_cards_1 = require("../../../schems/loan/2.lao_id_cards");
var icons_material_1 = require("@mui/icons-material");
var style_module_css_1 = require("../../../style.module.css");
var x_date_pickers_1 = require("@mui/x-date-pickers");
var AdapterDayjs_1 = require("@mui/x-date-pickers/AdapterDayjs");
var dayjs_1 = require("dayjs");
var D7_educations_1 = require("../../../api/loan/DataSet/D7.educations");
function DraggableDialog(_a) {
    var porps = _a.porps;
    var _b = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(_2_lao_id_cards_1.schema)
    }), register = _b.register, control = _b.control, handleSubmit = _b.handleSubmit, errors = _b.formState.errors, reset = _b.reset;
    var _c = React.useState([]), education_level_id = _c[0], setEducation_level_id = _c[1];
    var _d = React.useState(""), EducationLevelID = _d[0], setEducationLevelID = _d[1];
    var result = D7_educations_1.get_data();
    var today = dayjs_1["default"]();
    var yesterday = dayjs_1["default"]().subtract(1, "day");
    var onSubmit = function (data) {
        console.log("insety");
        var result = _2_lao_id_cards_1.schema.safeParse(data);
        if (!result.success) {
        }
        else {
            apiMonday_1["default"]
                .post("/lao_id_cards/create", result.data)
                .then(function (result) {
                if (result.data.status == true) {
                    react_toastify_1.toast.success("ບັນທຶກສຳເລັດ");
                    reset();
                }
                else {
                    react_toastify_1.toast.error("ບໍ້ສາມາດບັນທຶກຂໍ້ມູນໄດ້");
                }
            })["catch"](function (err) { return react_toastify_1.toast.error(err); });
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(FormInsert1_1["default"], { title: "Employee" },
            React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        alignItems: "center",
                        "& > :not(style)": { width: "20ch" }
                    } },
                    React.createElement(react_hook_form_1.Controller, { name: "id", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "id", type: "text" }, register("id"), { error: !!errors.id, helperText: (_b = errors.id) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "contact_info", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "contact_info", type: "text" }, register("contact_info"), { error: !!errors.contact_info, helperText: (_b = errors.contact_info) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "education_level_id", control: control, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                            return (React.createElement(material_1.Autocomplete, { sx: { width: 150 }, options: result.data, autoHighlight: true, onChange: function (e, value) {
                                    setEducationLevelID(value._id);
                                }, id: "controllable-states-demo", getOptionLabel: function (option) { return "" + option.value_LA; }, renderOption: function (props, option) {
                                    var key = props.key, optionProps = __rest(props, ["key"]);
                                    return (React.createElement(material_1.Box, __assign({ key: option._id, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                                }, renderInput: function (params) {
                                    var _a;
                                    return (React.createElement(material_1.TextField, __assign({}, params, register("education_level_id"), { label: "Choose a education_level_id", slotProps: {
                                            htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                        }, error: !!errors.education_level_id, helperText: (_a = errors.education_level_id) === null || _a === void 0 ? void 0 : _a.message, size: "small" })));
                                } }));
                        } })),
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        alignItems: "center",
                        "& > :not(style)": { width: "20ch" }
                    } },
                    React.createElement(react_hook_form_1.Controller, { name: "date_of_employment", control: control, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                            return (React.createElement(x_date_pickers_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs },
                                React.createElement(x_date_pickers_1.DatePicker, __assign({ defaultValue: yesterday, sx: { width: 150, height: 50 }, views: ["year", "month", "day"], slotProps: {
                                        textField: {
                                            helperText: "DD/MM/YYYY"
                                        }
                                    } }, register("date_of_employment"), { label: "date_of_employment", onChange: function (value) {
                                        setDateOfIssue(value);
                                    } }))));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "field_of_study", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "field_of_study", type: "text" }, register("field_of_study"), { error: !!errors.field_of_study, helperText: (_b = errors.field_of_study) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } })),
                React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap", justifyContent: "center" }, className: style_module_css_1["default"].ContorllerTexBox },
                    React.createElement(material_1.Button, { variant: "contained", sx: { width: "25ch" }, type: "submit", startIcon: React.createElement(icons_material_1.Save, null) }, "Insert"),
                    React.createElement(material_1.Button, { variant: "contained", sx: { width: "25ch" }, startIcon: React.createElement(icons_material_1.Clear, null), type: "reset" }, "Clear"))))));
}
exports["default"] = DraggableDialog;
