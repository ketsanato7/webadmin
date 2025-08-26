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
var Dialog_1 = require("@mui/material/Dialog");
var DialogContent_1 = require("@mui/material/DialogContent");
var DialogTitle_1 = require("@mui/material/DialogTitle");
var icons_material_1 = require("@mui/icons-material");
var react_hook_form_1 = require("react-hook-form");
var material_1 = require("@mui/material");
var apiMonday_1 = require("../../../../api/apiMonday");
var dailog_1 = require("../../../../component/dailog");
var D1_careers_1 = require("../../../../schems/loan/D/D1.careers");
var style_module_css_1 = require("../../../../style.module.css");
var react_toastify_1 = require("react-toastify");
var zod_1 = require("@hookform/resolvers/zod");
function DraggableDialog(_a) {
    var porps = _a.porps;
    var _b = React.useState([]), data = _b[0], setData = _b[1];
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    var form1 = React.useRef();
    var handleClickOpenInsert = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    var _d = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(D1_careers_1.schema)
    }), reset = _d.reset, register = _d.register, control = _d.control, handleSubmit = _d.handleSubmit, errors = _d.formState.errors;
    var onSubmit = function (data) {
        var result = D1_careers_1.schema.safeParse(data);
        if (!result.success) {
        }
        else {
            apiMonday_1["default"]
                .post("/genders/create", result.data)
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
        ;
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
                React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
                    React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap" } },
                        React.createElement(react_hook_form_1.Controller, { name: "id", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "id", type: "text" }, register("id"), { error: !!errors.id, helperText: (_b = errors.id) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", sx: { width: "25ch" } })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "value_LA", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "value_LA", type: "text" }, register("value_LA"), { error: !!errors.value_LA, helperText: (_b = errors.value_LA) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", sx: { width: "25ch" } })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "value_EN", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "value_EN", type: "text" }, register("value_EN"), { error: !!errors.value_EN, helperText: (_b = errors.value_EN) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", sx: { width: "25ch" } })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "code_LA", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "code_LA", type: "text" }, register("code_LA"), { error: !!errors.code_LA, helperText: (_b = errors.code_LA) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", sx: { width: "25ch" } })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "code_EN", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "code_EN", type: "text" }, register("code_EN"), { error: !!errors.code_EN, helperText: (_b = errors.code_EN) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", sx: { width: "25ch" } })));
                            } })),
                    React.createElement("br", null),
                    React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap", justifyContent: "center" }, className: style_module_css_1["default"].ContorllerTexBox },
                        React.createElement(material_1.Button, { variant: "contained", sx: { width: "25ch" }, type: 'submit', startIcon: React.createElement(icons_material_1.Save, null) }, "Insert"),
                        React.createElement(material_1.Button, { variant: "contained", sx: { width: "25ch" }, startIcon: React.createElement(icons_material_1.Clear, null), type: "reset" }, "Clear"))))),
        React.createElement(react_toastify_1.ToastContainer, null)));
}
exports["default"] = DraggableDialog;
