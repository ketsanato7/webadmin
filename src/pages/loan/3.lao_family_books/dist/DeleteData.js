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
var apiMonday_1 = require("../../../api/apiMonday");
var material_1 = require("@mui/material");
var style_module_css_1 = require("../../../style.module.css");
var react_toastify_1 = require("react-toastify");
var zod_1 = require("@hookform/resolvers/zod");
var dailog_1 = require("../../../component/dailog");
function DraggableDialog(_a) {
    var _b, _c, _d, _e;
    var porps = _a.porps;
    var _f = React.useState([]), data = _f[0], setData = _f[1];
    var _g = React.useState(false), open = _g[0], setOpen = _g[1];
    var _h = React.useState(""), status = _h[0], setStatus = _h[1];
    var form1 = React.useRef();
    var handleClickOpenInsert = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    var _j = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(schema), defaultValues: {
            VillageCode: porps.VillageCode,
            VillageName: porps.VillageName,
            DistrictID: porps.DistrictID,
            _id: porps._id
        }
    }), register = _j.register, handleSubmit = _j.handleSubmit, errors = _j.formState.errors, reset = _j.reset, getValues = _j.getValues;
    var onSubmit = function (data) {
        var result = schema.safeParse(data);
        apiMonday_1["default"]
            .post("/Village/delete", result.data)
            .then(function (e) {
            if (e.data.status == true) {
                react_toastify_1.toast.success("ບັນທຶກສຳເລັດ");
                reset();
            }
            else {
                react_toastify_1.toast.error("ບໍ້ສາມາດບັນທຶກຂໍ້ມູນໄດ້");
            }
        })["catch"](function (err) { return react_toastify_1.toast.error(err); });
    };
    React.useEffect(function () {
        apiMonday_1["default"].get("/District/read").then(function (result) {
            setData(result.data.data);
        });
    }, []);
    var UserTypeData = !!data &&
        data.map(function (item, index) {
            return __assign(__assign({}, item), { id: item._id, DistrictName: item.DistrictName });
        });
    var myList = UserTypeData.map(function (index) { return (React.createElement(material_1.MenuItem, { key: index._id, value: index._id }, index.DistrictName)); });
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.IconButton, { "aria-label": "fingerprint", color: "error", onClick: handleClickOpenInsert },
            React.createElement(icons_material_1.Delete, null)),
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
                React.createElement("form", { autoComplete: "off", onSubmit: handleSubmit(onSubmit) },
                    React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap" } },
                        React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "_id", type: "text" }, register("_id"), { error: !!errors._id, helperText: (_b = errors._id) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", sx: { width: "25ch" } })),
                        React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "Village Code", type: "text" }, register("VillageCode"), { error: !!errors.VillageCode, helperText: (_c = errors.VillageCode) === null || _c === void 0 ? void 0 : _c.message, variant: "outlined", sx: { width: "25ch" } })),
                        React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "VillageName", type: "text" }, register("VillageName"), { error: !!errors.VillageName, helperText: (_d = errors.VillageName) === null || _d === void 0 ? void 0 : _d.message, variant: "outlined", sx: { width: "25ch" } })),
                        React.createElement(material_1.FormControl, { sx: { width: "25ch" }, variant: "outlined" },
                            React.createElement(material_1.InputLabel, { id: "demo-simple-select-outlined-label" }, "District"),
                            React.createElement(material_1.Select, __assign({ labelId: "demo-simple-select-outlined-label", id: "demo-simple-select-outlined", label: "District" }, register("DistrictID"), { value: getValues("DistrictID") }), myList),
                            React.createElement(material_1.FormHelperText, { error: true, id: "my-helper-text" }, (_e = errors.DistrictID) === null || _e === void 0 ? void 0 : _e.message)),
                        "``"),
                    React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap", justifyContent: "center" }, className: style_module_css_1["default"].ContorllerTexBox },
                        React.createElement(material_1.Button, { variant: "contained", sx: { width: "25ch" }, type: "submit", startIcon: React.createElement(icons_material_1.Delete, null) }, "Delete"),
                        React.createElement(material_1.Button, { variant: "contained", sx: { width: "25ch" }, startIcon: React.createElement(icons_material_1.Clear, null), type: "reset" }, "Clear")))),
            React.createElement(react_toastify_1.ToastContainer, null))));
}
exports["default"] = DraggableDialog;
