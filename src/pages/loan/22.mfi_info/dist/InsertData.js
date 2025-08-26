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
var FormInsert_1 = require("../../../component/FormInsert");
var apiMonday_1 = require("../../../api/apiMonday");
var _2_lao_id_cards_1 = require("../../../schems/loan/2.lao_id_cards");
var icons_material_1 = require("@mui/icons-material");
var style_module_css_1 = require("../../../style.module.css");
var x_date_pickers_1 = require("@mui/x-date-pickers");
var AdapterDayjs_1 = require("@mui/x-date-pickers/AdapterDayjs");
var dayjs_1 = require("dayjs");
function DraggableDialog(_a) {
    var porps = _a.porps;
    var _b = React.useState([]), data = _b[0], setData = _b[1];
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    var _d = React.useState(), status = _d[0], setStatus = _d[1];
    var _e = React.useState([]), province_id = _e[0], setProvice_id = _e[1];
    var _f = React.useState([]), village_id = _f[0], setVillage_id = _f[1];
    var _g = React.useState([]), district_id = _g[0], setDistrict_id = _g[1];
    var form1 = React.useRef();
    var _h = React.useState(""), GenderID = _h[0], setGenderID = _h[1];
    var _j = React.useState(""), NationalityID = _j[0], setNationalityID = _j[1];
    var _k = React.useState(""), MaritalStatusID = _k[0], setMaritalStatusID = _k[1];
    var _l = React.useState(""), CareerID = _l[0], setCareerID = _l[1];
    var _m = React.useState(""), VillageID = _m[0], setVillageID = _m[1];
    var _o = React.useState(""), DistrictID = _o[0], setDistrictID = _o[1];
    var _p = React.useState(""), ProvinceID = _p[0], setProvinceID = _p[1];
    var _q = React.useState(""), DateOfBirth = _q[0], setDateOfBirth = _q[1];
    var _r = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(_2_lao_id_cards_1.schema)
    }), register = _r.register, control = _r.control, handleSubmit = _r.handleSubmit, errors = _r.formState.errors, reset = _r.reset;
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
    React.useEffect(function () {
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
        React.createElement(FormInsert_1["default"], { title: "mfi_info" },
            React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        alignItems: "center",
                        "& > :not(style)": { width: "20ch" }
                    } },
                    React.createElement(react_hook_form_1.Controller, { name: "owner_id", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "owner_id", type: "text" }, register("owner_id"), { error: !!errors.owner_id, helperText: (_b = errors.owner_id) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "approved_date", control: control, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                            return (React.createElement(x_date_pickers_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs },
                                React.createElement(x_date_pickers_1.DatePicker, __assign({ defaultValue: yesterday, sx: { width: 150, height: 50 }, views: ["year", "month", "day"], slotProps: {
                                        textField: {
                                            helperText: "DD/MM/YYYY"
                                        }
                                    } }, register("approved_date"), { label: "approved_date", onChange: function (value) {
                                        setDateOfIssue(value);
                                    } }))));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "name_LA", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "name_LA", type: "text" }, register("name_LA"), { error: !!errors.id, helperText: (_b = errors.id) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "name_EN", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "name_EN", type: "text" }, register("name_EN"), { error: !!errors.card_no, helperText: (_b = errors.card_no) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "card_name", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "card_name", type: "text" }, register("card_name"), { error: !!errors.value_EN, helperText: (_b = errors.value_EN) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } })),
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        alignItems: "center",
                        "& > :not(style)": { width: "20ch" }
                    } },
                    React.createElement(react_hook_form_1.Controller, { name: "date_of_issue", control: control, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                            return (React.createElement(x_date_pickers_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs },
                                React.createElement(x_date_pickers_1.DatePicker, __assign({ defaultValue: yesterday, sx: { width: 150, height: 50 }, views: ["year", "month", "day"], slotProps: {
                                        textField: {
                                            helperText: "DD/MM/YYYY"
                                        }
                                    } }, register("date_of_issue"), { label: "date_of_issue", onChange: function (value) {
                                        setDateOfIssue(value);
                                    } }))));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "exp_date", control: control, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                            return (React.createElement(x_date_pickers_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs },
                                React.createElement(x_date_pickers_1.DatePicker, __assign({ defaultValue: yesterday, sx: { width: 150, height: 50 }, views: ["year", "month", "day"], slotProps: {
                                        textField: {
                                            helperText: "DD/MM/YYYY"
                                        }
                                    } }, register("exp_date"), { label: "exp_date", onChange: function (value) {
                                        setExpDate(value);
                                    } }))));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "status", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "status", type: "text" }, register("status"), { error: !!errors.status, helperText: (_b = errors.status) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } })),
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        alignItems: "center",
                        "& > :not(style)": { width: "20ch" }
                    } },
                    React.createElement(react_hook_form_1.Controller, { name: "province_id", control: control, rules: { required: true }, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                            return (React.createElement(material_1.Autocomplete, { sx: { width: 150 }, options: province_id, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value; }, onChange: function (event, value) {
                                    get_district(value._id);
                                    setProvinceID(value._id);
                                }, renderOption: function (props, option) {
                                    var key = props.key, optionProps = __rest(props, ["key"]);
                                    return (React.createElement(material_1.Box, __assign({ key: key, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value));
                                }, renderInput: function (params, option) {
                                    var _a;
                                    return (React.createElement(material_1.TextField, __assign({}, params, register("province_id"), { label: "Choose a province_id", slotProps: {
                                            htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                        }, error: !!errors.province_id, helperText: (_a = errors.province_id) === null || _a === void 0 ? void 0 : _a.message, size: "small" })));
                                } }));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "district_id", control: control, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                            return (React.createElement(material_1.Autocomplete, { sx: { width: 150 }, options: district_id, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value; }, onChange: function (event, value) {
                                    get_village(value._id);
                                    setDistrictID(value._id);
                                }, renderOption: function (props, option) {
                                    var key = props.key, optionProps = __rest(props, ["key"]);
                                    return (React.createElement(material_1.Box, __assign({ key: option._id, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value));
                                }, renderInput: function (params) {
                                    var _a;
                                    return (React.createElement(material_1.TextField, __assign({}, params, register("district_id"), { label: "Choose a district_id", slotProps: {
                                            htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                        }, error: !!errors.district_id, helperText: (_a = errors.district_id) === null || _a === void 0 ? void 0 : _a.message, size: "small" })));
                                } }));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "village_id", control: control, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                            return (React.createElement(material_1.Autocomplete, { sx: { width: 200 }, options: village_id, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value; }, onChange: function (e, value) {
                                    setVillageID(value._id);
                                }, renderOption: function (props, option) {
                                    var key = props.key, optionProps = __rest(props, ["key"]);
                                    return (React.createElement(material_1.Box, __assign({ key: option._id, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value));
                                }, renderInput: function (params) {
                                    var _a;
                                    return (React.createElement(material_1.TextField, __assign({}, params, register("village_id"), { label: "Choose a village_id", slotProps: {
                                            htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                        }, error: !!errors.village_id, helperText: (_a = errors.village_id) === null || _a === void 0 ? void 0 : _a.message, size: "small" })));
                                } }));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "enterprise_id", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "enterprise_id", type: "text" }, register("enterprise_id"), { error: !!errors.status, helperText: (_b = errors.status) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } })),
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        alignItems: "center",
                        "& > :not(style)": { width: "20ch" }
                    } },
                    React.createElement(react_hook_form_1.Controller, { name: "license_no", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "license_no", type: "text" }, register("license_no"), { error: !!errors.status, helperText: (_b = errors.status) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "branches", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "branches", type: "text" }, register("branches"), { error: !!errors.status, helperText: (_b = errors.status) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "service_units", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "service_units", type: "text" }, register("service_units"), { error: !!errors.status, helperText: (_b = errors.status) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } })),
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        alignItems: "center",
                        "& > :not(style)": { width: "20ch" }
                    } },
                    React.createElement(react_hook_form_1.Controller, { name: "employees", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "employees", type: "text" }, register("employees"), { error: !!errors.status, helperText: (_b = errors.status) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "employees_female", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "employees_female", type: "text" }, register("employees_female"), { error: !!errors.status, helperText: (_b = errors.status) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "employees_HQ", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "employees_HQ", type: "text" }, register("employees_HQ"), { error: !!errors.status, helperText: (_b = errors.status) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "employees_female_HQ", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "employees_female_HQ", type: "text" }, register("employees_female_HQ"), { error: !!errors.status, helperText: (_b = errors.status) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "tel", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "tel", type: "text" }, register("tel"), { error: !!errors.status, helperText: (_b = errors.status) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "status", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "status", type: "text" }, register("status"), { error: !!errors.status, helperText: (_b = errors.status) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } })),
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        alignItems: "center",
                        "& > :not(style)": { width: "20ch" }
                    } },
                    React.createElement(react_hook_form_1.Controller, { name: "mobile", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "mobile", type: "text" }, register("mobile"), { error: !!errors.status, helperText: (_b = errors.status) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "fax", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "fax", type: "text" }, register("fax"), { error: !!errors.status, helperText: (_b = errors.status) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "email", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "email", type: "text" }, register("email"), { error: !!errors.status, helperText: (_b = errors.status) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } })),
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        alignItems: "center",
                        "& > :not(style)": { width: "20ch" }
                    } },
                    React.createElement(react_hook_form_1.Controller, { name: "whatsapp", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "whatsapp", type: "text" }, register("whatsapp"), { error: !!errors.website, helperText: (_b = errors.website) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "website", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "website", type: 'text' }, register("website"), { error: !!errors.other_infos, helperText: (_b = errors.other_infos) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "other_infos", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "other_infos", type: "text" }, register("other_infos"), { error: !!errors.other_infos, helperText: (_b = errors.other_infos) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "latitude", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "latitude", type: "text" }, register("latitude"), { error: !!errors.latitude, helperText: (_b = errors.latitude) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } })),
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        alignItems: "center",
                        "& > :not(style)": { width: "20ch" }
                    } },
                    React.createElement(react_hook_form_1.Controller, { name: "longitude", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, error = _a.fieldState.error;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "longitude", type: "text" }, register("longitude"), { error: !!errors.longitude, helperText: (_b = errors.longitude) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } })),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap", justifyContent: "center" }, className: style_module_css_1["default"].ContorllerTexBox },
                    React.createElement(material_1.Button, { variant: "contained", sx: { width: "25ch" }, type: "submit", startIcon: React.createElement(icons_material_1.Save, null) }, "Insert"),
                    React.createElement(material_1.Button, { variant: "contained", sx: { width: "25ch" }, startIcon: React.createElement(icons_material_1.Clear, null), type: "reset" }, "Clear"))))));
}
exports["default"] = DraggableDialog;
