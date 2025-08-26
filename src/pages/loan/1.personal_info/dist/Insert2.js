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
var icons_material_1 = require("@mui/icons-material");
var CloudUpload_1 = require("@mui/icons-material/CloudUpload");
var react_hook_form_1 = require("react-hook-form");
var material_1 = require("@mui/material");
var Autocomplete_1 = require("@mui/material/Autocomplete");
var style_module_css_1 = require("../../../style.module.css");
var react_toastify_1 = require("react-toastify");
var zod_1 = require("@hookform/resolvers/zod");
var _1_personal_info_1 = require("../../../schems/loan/1.personal_info");
var AdapterDayjs_1 = require("@mui/x-date-pickers/AdapterDayjs");
var LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
var dayjs_1 = require("dayjs");
var DatePicker_1 = require("@mui/x-date-pickers/DatePicker");
var D20_document_types_1 = require("../../../api/loan/DataSet/D20.document_types");
var ListImage_1 = require("../../../component/ListImage");
function DraggableDialog(_a) {
    var porps = _a.porps;
    var _b = React.useState(""), NationalityID = _b[0], setNationalityID = _b[1];
    var _c = React.useState(""), DateOfIssue = _c[0], setDateOfIssue = _c[1];
    var _d = React.useState(""), ExpDate = _d[0], setExpDate = _d[1];
    var today = dayjs_1["default"]();
    var exp_date = dayjs_1["default"](today).add(5, "year");
    var _e = React.useState(), DateExpiry = _e[0], setDateExpiry = _e[1];
    var _f = React.useState(), DateIssue = _f[0], setDateIssue = _f[1];
    var _g = react_hook_form_1.useForm({ resolver: zod_1.zodResolver(_1_personal_info_1.schema) }), reset = _g.reset, register = _g.register, control = _g.control, setValue = _g.setValue, handleSubmit = _g.handleSubmit, errors = _g.formState.errors;
    var onSubmit = function (data) {
        var dataQuery = {
            id: data.id,
            firstname_LA: data.firstname_LA,
            lastname_LA: data.lastname_LA,
            firstname_EN: data.firstname_EN,
            lastname_EN: data.lastname_EN,
            dateofbirth: data.dateofbirth,
            age: data.age,
            gender_id: GenderID,
            nationality_id: NationalityID,
            marital_status_id: MaritalStatusID,
            career_id: CareerID,
            province_id: ProvinceID,
            district_id: DistrictID,
            village_id: VillageID,
            home_address: data.home_address,
            contact_info: data.contact_info,
            status: data.status
        };
        console.log(dataQuery);
        var result = _1_personal_info_1.schema.safeParse(dataQuery);
        // if (!result.success) {
        // } else {
        //   axios
        //     .post("/personal_info/create", result.data)
        //     .then((result) => {
        //       if (result.data.status == true) {
        //         toast.success("ບັນທຶກສຳເລັດ");
        //         reset();
        //       } else {
        //         toast.error("ບໍ້ສາມາດບັນທຶກຂໍ້ມູນໄດ້");
        //       }
        //     })
        //     .catch((err) => toast.error(err));
        // }
    };
    var document_types = D20_document_types_1.get_data();
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
            React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap" } },
                React.createElement(react_hook_form_1.Controller, { name: "document_type", control: control, render: function (_a) {
                        var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref, _c = _a.fieldState;
                        return (React.createElement(Autocomplete_1["default"], { sx: { width: 300 }, options: document_types.data, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value_LA; }, onChange: function (e, value) {
                                setNationalityID(value._id);
                            }, renderOption: function (props, option) {
                                var key = props.key, optionProps = __rest(props, ["key"]);
                                return (React.createElement(material_1.Box, __assign({ key: option._id, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                            }, renderInput: function (params) {
                                var _a;
                                return (React.createElement(material_1.TextField, __assign({}, params, register("document_type"), { label: "Choose a document_type", slotProps: {
                                        htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                    }, error: !!errors.nationality_id, helperText: (_a = errors.nationality_id) === null || _a === void 0 ? void 0 : _a.message })));
                            } }));
                    } }),
                React.createElement(react_hook_form_1.Controller, { name: "id", control: control, render: function (_a) {
                        var _b;
                        var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                        return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "id", type: "text" }, register("id"), { error: !!errors.id, helperText: (_b = errors.id) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", sx: { width: "25ch" } })));
                    } }),
                React.createElement(react_hook_form_1.Controller, { name: "no", control: control, render: function (_a) {
                        var _b;
                        var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                        return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "card_no", type: "text" }, register("no"), { error: !!errors.no, helperText: (_b = errors.no) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", sx: { width: "25ch" } })));
                    } }),
                React.createElement(react_hook_form_1.Controller, { name: "name", control: control, render: function (_a) {
                        var _b;
                        var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                        return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "name", type: "text" }, register("name"), { error: !!errors.name, helperText: (_b = errors.name) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", sx: { width: "25ch" } })));
                    } }),
                React.createElement(react_hook_form_1.Controller, { name: "date_of_issue", control: control, render: function (_a) {
                        var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                        return (React.createElement(LocalizationProvider_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs },
                            React.createElement(DatePicker_1.DatePicker, __assign({ defaultValue: today, views: ["year", "month", "day"], slotProps: {
                                    textField: {
                                        helperText: "DD/MM/YYYY"
                                    }
                                } }, register("date_of_issue"), { label: "date_of_issue", onChange: function (value) {
                                    setDateIssue(value);
                                } }))));
                    } }),
                React.createElement(react_hook_form_1.Controller, { name: "exp_date", control: control, render: function (_a) {
                        var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                        return (React.createElement(LocalizationProvider_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs },
                            React.createElement(DatePicker_1.DatePicker, __assign({ defaultValue: exp_date, disablePast: true, views: ["year", "month", "day"], slotProps: {
                                    textField: {
                                        helperText: "DD/MM/YYYY"
                                    }
                                } }, register("exp_date"), { label: "exp_date", onChange: function (value) {
                                    setDateExpiry(value);
                                } }))));
                    } })),
            React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap" } },
                React.createElement(react_hook_form_1.Controller, { name: "exp_date", control: control, render: function (_a) {
                        var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                        return (React.createElement(material_1.Button, { component: "label", role: undefined, variant: "contained", tabIndex: -1, startIcon: React.createElement(CloudUpload_1["default"], null) },
                            "Upload files",
                            React.createElement(VisuallyHiddenInput, { type: "file", onChange: function (event) { return console.log(event.target.files); }, multiple: true })));
                    } })),
            React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap" } },
                React.createElement(ListImage_1["default"], null)),
            React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap", justifyContent: "center" }, className: style_module_css_1["default"].ContorllerTexBox },
                React.createElement(material_1.Button, { variant: "contained", sx: { width: "25ch" }, type: "submit", startIcon: React.createElement(icons_material_1.Save, null) }, "Insert"),
                React.createElement(material_1.Button, { variant: "contained", sx: { width: "25ch" }, startIcon: React.createElement(icons_material_1.Clear, null), type: "reset" }, "Clear"))),
        React.createElement(react_toastify_1.ToastContainer, null)));
}
exports["default"] = DraggableDialog;
