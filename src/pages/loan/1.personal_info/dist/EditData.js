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
var Dialog_1 = require("@mui/material/Dialog");
var DialogContent_1 = require("@mui/material/DialogContent");
var DialogTitle_1 = require("@mui/material/DialogTitle");
var icons_material_1 = require("@mui/icons-material");
var react_hook_form_1 = require("react-hook-form");
var apiMonday_1 = require("../../../api/apiMonday");
var material_1 = require("@mui/material");
var Autocomplete_1 = require("@mui/material/Autocomplete");
var style_module_css_1 = require("../../../style.module.css");
var react_toastify_1 = require("react-toastify");
var zod_1 = require("@hookform/resolvers/zod");
var dailog_1 = require("../../../component/dailog");
var _1_personal_info_1 = require("../../../schems/loan/1.personal_info");
var AdapterDayjs_1 = require("@mui/x-date-pickers/AdapterDayjs");
var LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
var dayjs_1 = require("dayjs");
var DatePicker_1 = require("@mui/x-date-pickers/DatePicker");
function DraggableDialog(_a) {
    var porps = _a.porps;
    var _b = React.useState([]), data = _b[0], setData = _b[1];
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    var _d = React.useState(), status = _d[0], setStatus = _d[1];
    var _e = React.useState([]), gender_id = _e[0], setGender_id = _e[1];
    var _f = React.useState([]), nationality_id = _f[0], setNationality_id = _f[1];
    var _g = React.useState([]), marital_status_id = _g[0], setMarital_status_id = _g[1];
    var _h = React.useState([]), career_id = _h[0], setCareer_id = _h[1];
    var _j = React.useState([]), village_id = _j[0], setVillage_id = _j[1];
    var _k = React.useState([]), district_id = _k[0], setDistrict_id = _k[1];
    var _l = React.useState([]), province_id = _l[0], setProvice_id = _l[1];
    var _m = React.useState([]), id_district = _m[0], setId_district = _m[1];
    var _o = React.useState([]), id_province = _o[0], setId_province = _o[1];
    var form1 = React.useRef();
    var _p = React.useState(""), GenderID = _p[0], setGenderID = _p[1];
    var _q = React.useState(""), NationalityID = _q[0], setNationalityID = _q[1];
    var _r = React.useState(""), MaritalStatusID = _r[0], setMaritalStatusID = _r[1];
    var _s = React.useState(""), CareerID = _s[0], setCareerID = _s[1];
    var _t = React.useState(""), VillageID = _t[0], setVillageID = _t[1];
    var _u = React.useState(""), DistrictID = _u[0], setDistrictID = _u[1];
    var _v = React.useState(""), ProvinceID = _v[0], setProvinceID = _v[1];
    var _w = React.useState(""), DateOfBirth = _w[0], setDateOfBirth = _w[1];
    var today = dayjs_1["default"]();
    var yesterday = dayjs_1["default"]().subtract(1, "day");
    var handleClickOpenInsert = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    var _x = react_hook_form_1.useForm({ resolver: zod_1.zodResolver(_1_personal_info_1.schema) }), reset = _x.reset, register = _x.register, control = _x.control, setValue = _x.setValue, handleSubmit = _x.handleSubmit, errors = _x.formState.errors;
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
        var result = _1_personal_info_1.schema.safeParse(dataQuery);
        if (!result.success) {
        }
        else {
            apiMonday_1["default"]
                .post("/personal_info/create", result.data)
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
    React.useEffect(function () {
        apiMonday_1["default"].get("/genders/read").then(function (result) {
            setGender_id(result.data.data);
        });
        apiMonday_1["default"].get("/nationality/read").then(function (result) {
            setNationality_id(result.data.data);
        });
        apiMonday_1["default"].get("/marital_statuses/read").then(function (result) {
            setMarital_status_id(result.data.data);
        });
        apiMonday_1["default"].get("/careers/read").then(function (result) {
            setCareer_id(result.data.data);
        });
        apiMonday_1["default"].get("/provinces/read").then(function (result) {
            setProvice_id(result.data.data);
        });
    }, []);
    var get_district = function (value) {
        var district_fk = {
            provice_id: value
        };
        apiMonday_1["default"].post("/districts/read_fk", district_fk).then(function (result) {
            setDistrict_id(result.data.data);
        });
    };
    var get_village = function (value) {
        var village_fk = {
            district_id: value
        };
        apiMonday_1["default"].post("/villages/read_fk", village_fk).then(function (result) {
            setVillage_id(result.data.data);
        });
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
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "id", type: "number" }, register("id"), { error: !!errors.id, helperText: (_b = errors.id) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", sx: { width: "25ch" } })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "firstname_LA", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "firstname_LA", type: "text" }, register("firstname_LA"), { error: !!errors.firstname_LA, helperText: (_b = errors.firstname_LA) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", sx: { width: "25ch" } })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "lastname_LA", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "lastname_LA", type: "text" }, register("lastname_LA"), { error: !!errors.lastname_LA, helperText: (_b = errors.lastname_LA) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", sx: { width: "25ch" } })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "firstname_EN", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "firstname_EN", type: "text" }, register("firstname_EN"), { error: !!errors.firstname_EN, helperText: (_b = errors.firstname_EN) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", sx: { width: "25ch" } })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "lastname_EN", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "lastname_EN", type: "text" }, register("lastname_EN"), { error: !!errors.lastname_EN, helperText: (_b = errors.lastname_EN) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", sx: { width: "25ch" } })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "dateofbirth", control: control, render: function (_a) {
                                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                                return (React.createElement(LocalizationProvider_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs },
                                    React.createElement(DatePicker_1.DatePicker, __assign({ defaultValue: yesterday, disablePast: true, views: ["year", "month", "day"], slotProps: {
                                            textField: {
                                                helperText: "DD/MM/YYYY"
                                            }
                                        } }, register("dateofbirth"), { label: "Basic date picker", onChange: function (value) {
                                            setDateOfBirth(value);
                                        } }))));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "age", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "age", type: "text" }, register("age"), { error: !!errors.age, helperText: (_b = errors.age) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", sx: { width: "25ch" } })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "home_address", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "home_address", type: "text" }, register("home_address"), { error: !!errors.home_address, helperText: (_b = errors.home_address) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", sx: { width: "25ch" } })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "contact_info", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "contact_info", type: "text" }, register("contact_info"), { error: !!errors.contact_info, helperText: (_b = errors.contact_info) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", sx: { width: "25ch" } })));
                            } }),
                        " ",
                        React.createElement(react_hook_form_1.Controller, { name: "status", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "status", type: "text" }, register("status"), { error: !!errors.status, helperText: (_b = errors.status) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", sx: { width: "25ch" } })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "nationality_id", control: control, render: function (_a) {
                                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                                return (React.createElement(Autocomplete_1["default"], { sx: { width: 300 }, options: nationality_id, autoHighlight: true, getOptionLabel: function (option) { return option.value_LA + " "; }, onChange: function (e, value) {
                                        setNationalityID(value._id);
                                    }, renderOption: function (props, option) {
                                        var key = props.key, optionProps = __rest(props, ["key"]);
                                        return (React.createElement(material_1.Box, __assign({ key: option._id, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                                    }, renderInput: function (params) { return (React.createElement(material_1.TextField, __assign({}, params, register("nationality_id"), { label: "Choose a nationality_id", slotProps: {
                                            htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                        } }))); } }));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "marital_status_id", control: control, render: function (_a) {
                                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                                return (React.createElement(Autocomplete_1["default"], { sx: { width: 300 }, options: marital_status_id, autoHighlight: true, onChange: function (e, value) {
                                        setMaritalStatusID(value._id);
                                    }, getOptionLabel: function (option) { return "" + option.value_LA; }, renderOption: function (props, option) {
                                        var key = props.key, optionProps = __rest(props, ["key"]);
                                        return (React.createElement(material_1.Box, __assign({ key: option._id, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                                    }, renderInput: function (params) { return (React.createElement(material_1.TextField, __assign({}, params, register("marital_status_id"), { label: "Choose a marital_status_id", slotProps: {
                                            htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                        } }))); } }));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "career_id", control: control, render: function (_a) {
                                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                                return (React.createElement(Autocomplete_1["default"], { sx: { width: 300 }, options: career_id, autoHighlight: true, onChange: function (e, value) {
                                        setCareerID(value._id);
                                    }, id: "controllable-states-demo", getOptionLabel: function (option) { return "" + option.value_LA; }, renderOption: function (props, option) {
                                        var key = props.key, optionProps = __rest(props, ["key"]);
                                        return (React.createElement(material_1.Box, __assign({ key: option._id, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                                    }, renderInput: function (params) { return (React.createElement(material_1.TextField, __assign({}, params, register("career_id"), { label: "Choose a career_id", slotProps: {
                                            htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                        } }))); } }));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "province_id", control: control, rules: { required: true }, render: function (_a) {
                                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                                return (React.createElement(Autocomplete_1["default"], { sx: { width: 300 }, options: province_id, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value; }, onChange: function (event, value) {
                                        get_district(value._id);
                                        setProvinceID(value._id);
                                    }, renderOption: function (props, option) {
                                        var key = props.key, optionProps = __rest(props, ["key"]);
                                        return (React.createElement(material_1.Box, __assign({ key: key, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value));
                                    }, renderInput: function (params, option) {
                                        return (React.createElement(material_1.TextField, __assign({}, params, register("province_id"), { label: "Choose a province_id", slotProps: {
                                                htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                            } })));
                                    } }));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "district_id", control: control, render: function (_a) {
                                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                                return (React.createElement(Autocomplete_1["default"], { sx: { width: 300 }, options: district_id, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value; }, onChange: function (event, value) {
                                        get_village(value._id);
                                        setDistrictID(value._id);
                                    }, renderOption: function (props, option) {
                                        var key = props.key, optionProps = __rest(props, ["key"]);
                                        return (React.createElement(material_1.Box, __assign({ key: option._id, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value));
                                    }, renderInput: function (params) { return (React.createElement(material_1.TextField, __assign({}, params, register("district_id"), { label: "Choose a district_id", slotProps: {
                                            htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                        } }))); } }));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "village_id", control: control, render: function (_a) {
                                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                                return (React.createElement(Autocomplete_1["default"], { sx: { width: 300 }, options: village_id, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value; }, onChange: function (e, value) {
                                        setVillageID(value._id);
                                    }, renderOption: function (props, option) {
                                        var key = props.key, optionProps = __rest(props, ["key"]);
                                        return (React.createElement(material_1.Box, __assign({ key: option._id, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value));
                                    }, renderInput: function (params) { return (React.createElement(material_1.TextField, __assign({}, params, register("village_id"), { label: "Choose a village_id", slotProps: {
                                            htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                        } }))); } }));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "gender_id", control: control, render: function (_a) {
                                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                                return (React.createElement(Autocomplete_1["default"], { sx: { width: 300 }, options: gender_id, onChange: function (e, value) {
                                        setGenderID(value._id);
                                    }, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value_LA; }, renderOption: function (props, option) {
                                        var key = props.key, optionProps = __rest(props, ["key"]);
                                        return (React.createElement(material_1.Box, __assign({ key: option._id, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                                    }, renderInput: function (params) { return (React.createElement(material_1.TextField, __assign({}, params, { label: "Choose a gender_id" }, register("gender_id"), { slotProps: {
                                            htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                        } }))); } }));
                            } })),
                    React.createElement("br", null),
                    React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap", justifyContent: "center" }, className: style_module_css_1["default"].ContorllerTexBox },
                        React.createElement(material_1.Button, { variant: "contained", sx: { width: "25ch" }, type: "submit", startIcon: React.createElement(icons_material_1.Save, null) }, "Insert"),
                        React.createElement(material_1.Button, { variant: "contained", sx: { width: "25ch" }, startIcon: React.createElement(icons_material_1.Clear, null), type: "reset" }, "Clear"))),
                React.createElement(react_toastify_1.ToastContainer, null)))));
}
exports["default"] = DraggableDialog;
