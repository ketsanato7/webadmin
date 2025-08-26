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
var React = require("react");
var react_hook_form_1 = require("react-hook-form");
var material_1 = require("@mui/material");
var react_toastify_1 = require("react-toastify");
var zod_1 = require("@hookform/resolvers/zod");
var FormInsert_1 = require("../../../component/FormInsert");
var apiMonday_1 = require("../../../api/apiMonday");
var _2_lao_id_cards_1 = require("../../../schems/loan/2.lao_id_cards");
var icons_material_1 = require("@mui/icons-material");
var style_module_css_1 = require("../../../style.module.css");
var dayjs_1 = require("dayjs");
function DraggableDialog(_a) {
    var porps = _a.porps;
    var _b = React.useState([]), province_id = _b[0], setProvice_id = _b[1];
    var _c = React.useState([]), village_id = _c[0], setVillage_id = _c[1];
    var _d = React.useState([]), district_id = _d[0], setDistrict_id = _d[1];
    var _e = React.useState(""), CollateralCategories = _e[0], setCollateralCategories = _e[1];
    var today = dayjs_1["default"]();
    var yesterday = dayjs_1["default"]().subtract(1, "day");
    var _f = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(_2_lao_id_cards_1.schema)
    }), register = _f.register, control = _f.control, handleSubmit = _f.handleSubmit, errors = _f.formState.errors, reset = _f.reset;
    var onSubmit = function (data) {
        console.log("insety");
        var result = _2_lao_id_cards_1.schema.safeParse(data);
        if (!result.success) {
        }
        else {
            apiMonday_1["default"]
                .post("/enterprise_info/create", result.data)
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
        React.createElement(FormInsert_1["default"], { title: "enterprise_info" },
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
                    React.createElement(react_hook_form_1.Controller, { name: "enterprise_id", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "enterprise_id", type: "text" }, register("enterprise_id"), { error: !!errors.enterprise_id, helperText: (_b = errors.enterprise_id) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "collateral_id", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "collateral_id", type: "text" }, register("collateral_id"), { error: !!errors.collateral_id, helperText: (_b = errors.collateral_id) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } })),
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        alignItems: "center",
                        "& > :not(style)": { width: "20ch" }
                    } },
                    React.createElement(react_hook_form_1.Controller, { name: "status", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "status", type: "text" }, register("status"), { error: !!errors.status, helperText: (_b = errors.status) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } })),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap", justifyContent: "center" }, className: style_module_css_1["default"].ContorllerTexBox },
                    React.createElement(material_1.Button, { variant: "contained", sx: { width: "25ch" }, type: "submit", startIcon: React.createElement(icons_material_1.Save, null) }, "Insert"),
                    React.createElement(material_1.Button, { variant: "contained", sx: { width: "25ch" }, startIcon: React.createElement(icons_material_1.Clear, null), type: "reset" }, "Clear"))))));
}
exports["default"] = DraggableDialog;
