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
var react_hook_form_1 = require("react-hook-form");
var apiMonday_1 = require("../../../api/apiMonday");
var material_1 = require("@mui/material");
var Autocomplete_1 = require("@mui/material/Autocomplete");
var style_module_css_1 = require("../../../style.module.css");
var react_toastify_1 = require("react-toastify");
var zod_1 = require("@hookform/resolvers/zod");
var AdapterDayjs_1 = require("@mui/x-date-pickers/AdapterDayjs");
var LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
var dayjs_1 = require("dayjs");
var DatePicker_1 = require("@mui/x-date-pickers/DatePicker");
var D20_document_types_1 = require("../../../api/loan/DataSet/D20.document_types");
var _1_personal_info_1 = require("../../../schems/loan/1.personal_info");
function DraggableDialog(_a) {
    var porps = _a.porps;
    var _b = React.useState([]), gender_id = _b[0], setGender_id = _b[1];
    var _c = React.useState([]), nationality_id = _c[0], setNationality_id = _c[1];
    var _d = React.useState([]), marital_status_id = _d[0], setMarital_status_id = _d[1];
    var _e = React.useState([]), career_id = _e[0], setCareer_id = _e[1];
    var _f = React.useState([]), village_id = _f[0], setVillage_id = _f[1];
    var _g = React.useState([]), district_id = _g[0], setDistrict_id = _g[1];
    var _h = React.useState([]), province_id = _h[0], setProvice_id = _h[1];
    var _j = React.useState([]), id_district = _j[0], setId_district = _j[1];
    var _k = React.useState([]), id_province = _k[0], setId_province = _k[1];
    var _l = React.useState(), GenderID = _l[0], setGenderID = _l[1];
    var _m = React.useState(""), NationalityID = _m[0], setNationalityID = _m[1];
    var _o = React.useState(""), MaritalStatusID = _o[0], setMaritalStatusID = _o[1];
    var _p = React.useState(""), CareerID = _p[0], setCareerID = _p[1];
    var _q = React.useState(""), VillageID = _q[0], setVillageID = _q[1];
    var _r = React.useState(""), DistrictID = _r[0], setDistrictID = _r[1];
    var _s = React.useState(""), ProvinceID = _s[0], setProvinceID = _s[1];
    var _t = React.useState(""), DateOfBirth = _t[0], setDateOfBirth = _t[1];
    var today = dayjs_1["default"]();
    var yesterday = dayjs_1["default"]().subtract(1, "day");
    var exp_date = dayjs_1["default"](today).add(5, "year");
    var _u = React.useState(""), DateExpiry = _u[0], setDateExpiry = _u[1];
    var _v = React.useState(""), DateIssue = _v[0], setDateIssue = _v[1];
    var _w = React.useState(""), DocumentTypeID = _w[0], setDocumentTypeID = _w[1];
    var _x = React.useState(""), MarriedCoupleDateOfBirth = _x[0], setMarriedCoupleDateOfBirth = _x[1];
    var _y = React.useState(""), MarriedCoupleCareerID = _y[0], setMarriedCoupleCareerID = _y[1];
    var _z = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(_1_personal_info_1.schema)
    }), reset = _z.reset, register = _z.register, control = _z.control, handleSubmit = _z.handleSubmit, errors = _z.formState.errors;
    var document_types = D20_document_types_1.get_data().data;
    var Insert = function (data) {
        var dataQuery = {
            id: data.id,
            firstname_LA: data.firstname_LA,
            lastname_LA: data.lastname_LA,
            firstname_EN: data.firstname_EN,
            lastname_EN: data.lastname_EN,
            dateofbirth: dayjs_1["default"](DateOfBirth).format("DD-MM-YYYY"),
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
            status: data.status,
            document_type_id: DocumentTypeID,
            document_id: data.document_id,
            document_no: data.document_no,
            document_name: data.document_name,
            issued_by: dayjs_1["default"](DateIssue).format("DD-MM-YYYY"),
            exp_date: dayjs_1["default"](DateExpiry).format("DD-MM-YYYY"),
            work_place: data.work_place,
            work_place_tel: data.work_place_tel,
            married_couple_id: data.married_couple_id,
            married_couple_firstname_LA: data.married_couple_firstname_LA,
            married_couple_lastname_LA: data.married_couple_lastname_LA,
            married_couple_tel: data.married_couple_work_place_tel,
            married_couple_dateofbirth: dayjs_1["default"](MarriedCoupleDateOfBirth).format("DD-MM-YYYY"),
            married_couple_career_id: MarriedCoupleCareerID,
            married_couple_work_place: data.married_couple_work_place,
            married_couple_work_place_tel: data.married_couple_work_place_tel
        };
        var result = _1_personal_info_1.schema.safeParse(dataQuery);
        console.log(data);
        console.log(dataQuery);
        if (!result.success) {
            console.log(result);
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
        React.createElement("form", { onSubmit: handleSubmit(Insert) },
            React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap" }, className: style_module_css_1["default"].ContorllerTexBox },
                React.createElement("fieldset", null,
                    React.createElement(material_1.Box, { sx: {
                            display: "flex",
                            alignItems: "center",
                            "& > :not(style)": { m: 1, width: "20ch" }
                        } },
                        React.createElement(react_hook_form_1.Controller, { name: "id", control: control, render: function (_a) {
                                var field = _a.field, error = _a.fieldState.error;
                                return (React.createElement(material_1.TextField, __assign({}, field, { label: "id", error: !!error, helperText: error === null || error === void 0 ? void 0 : error.message })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "firstname_LA", control: control, render: function (_a) {
                                var field = _a.field, error = _a.fieldState.error;
                                return (React.createElement(material_1.TextField, __assign({}, field, { label: "firstname_LA", error: !!error, helperText: error === null || error === void 0 ? void 0 : error.message })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "lastname_LA", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "lastname_LA", type: "text" }, register("lastname_LA"), { error: !!errors.lastname_LA, helperText: (_b = errors.lastname_LA) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "firstname_EN", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "firstname_EN", type: "text" }, register("firstname_EN"), { error: !!errors.firstname_EN, helperText: (_b = errors.firstname_EN) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "lastname_EN", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "lastname_EN", type: "text" }, register("lastname_EN"), { error: !!errors.lastname_EN, helperText: (_b = errors.lastname_EN) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "gender_id", control: control, render: function (_a) {
                                var field = _a.field, error = _a.fieldState.error;
                                return (React.createElement(Autocomplete_1["default"], { options: gender_id, getOptionLabel: function (o) { return o.value_LA; }, value: gender_id.find(function (g) { return g._id === field.value; }) || null, onChange: function (e, v) {
                                        setGenderID(v._id);
                                    }, renderInput: function (params) { return (React.createElement(material_1.TextField, __assign({}, params, { label: "Gender", error: !!error, helperText: error === null || error === void 0 ? void 0 : error.message }))); } }));
                            } })),
                    React.createElement(material_1.Box, { sx: {
                            display: "flex",
                            alignItems: "center",
                            "& > :not(style)": { m: 1, width: "20ch" }
                        } },
                        React.createElement(react_hook_form_1.Controller, { name: "dateofbirth", control: control, render: function (_a) {
                                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                                return (React.createElement(LocalizationProvider_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs },
                                    React.createElement(DatePicker_1.DatePicker, __assign({ defaultValue: yesterday, sx: { width: 150, height: 50 }, views: ["year", "month", "day"], slotProps: {
                                            textField: {
                                                helperText: "DD/MM/YYYY"
                                            }
                                        } }, register("dateofbirth"), { label: "dateofbirth", onChange: function (value) {
                                            setDateOfBirth(value);
                                        } }))));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "age", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "age", type: "text" }, register("age"), { error: !!errors.age, helperText: (_b = errors.age) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "nationality_id", control: control, render: function (_a) {
                                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref, _c = _a.fieldState;
                                return (React.createElement(Autocomplete_1["default"], { sx: { width: 150 }, options: nationality_id, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value_LA; }, onChange: function (e, value) {
                                        setNationalityID(value._id);
                                    }, renderOption: function (props, option) {
                                        var key = props.key, optionProps = __rest(props, ["key"]);
                                        return (React.createElement(material_1.Box, __assign({ key: option._id, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                                    }, renderInput: function (params) {
                                        var _a;
                                        return (React.createElement(material_1.TextField, __assign({}, params, register("nationality_id"), { label: "Choose a nationality_id", slotProps: {
                                                htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                            }, error: !!errors.nationality_id, helperText: (_a = errors.nationality_id) === null || _a === void 0 ? void 0 : _a.message, size: "small" })));
                                    } }));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "province_id", sx: { width: 200 }, control: control, rules: { required: true }, render: function (_a) {
                                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                                return (React.createElement(Autocomplete_1["default"], { sx: { width: 150 }, options: province_id, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value; }, onChange: function (event, value) {
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
                        React.createElement(react_hook_form_1.Controller, { name: "district_id", sx: { width: 200 }, control: control, render: function (_a) {
                                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                                return (React.createElement(Autocomplete_1["default"], { sx: { width: 150 }, options: district_id, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value; }, onChange: function (event, value) {
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
                                return (React.createElement(Autocomplete_1["default"], { sx: { width: 200 }, options: village_id, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value; }, onChange: function (e, value) {
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
                            } })),
                    React.createElement(material_1.Box, { sx: {
                            display: "flex",
                            alignItems: "center",
                            "& > :not(style)": { m: 1, width: "20ch" }
                        } },
                        React.createElement(react_hook_form_1.Controller, { name: "home_address", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "home_address", type: "text" }, register("home_address"), { error: !!errors.home_address, helperText: (_b = errors.home_address) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "contact_info", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "contact_info", type: "text" }, register("contact_info"), { error: !!errors.contact_info, helperText: (_b = errors.contact_info) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "status", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "status", type: "text" }, register("status"), { error: !!errors.status, helperText: (_b = errors.status) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                            } })))),
            React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap" }, className: style_module_css_1["default"].ContorllerTexBox },
                React.createElement("fieldset", null,
                    React.createElement(material_1.Box, { sx: {
                            display: "flex",
                            alignItems: "center",
                            "& > :not(style)": { m: 1, width: "20ch" }
                        } },
                        React.createElement(react_hook_form_1.Controller, { name: "document_type_id", control: control, render: function (_a) {
                                var onChange = _a.field.onChange;
                                return (React.createElement(Autocomplete_1["default"], { sx: { width: 150 }, options: document_types, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value_LA; }, onChange: function (e, value) {
                                        setDocumentTypeID(value._id);
                                    }, renderOption: function (props, option) {
                                        var key = props.key, optionProps = __rest(props, ["key"]);
                                        return (React.createElement(material_1.Box, __assign({ key: option._id, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                                    }, renderInput: function (params) {
                                        var _a;
                                        return (React.createElement(material_1.TextField, __assign({}, params, register("document_type_id"), { label: "Choose a document_type", slotProps: {
                                                htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                            }, size: "small", error: !!errors.document_type_id, helperText: (_a = errors.document_type_id) === null || _a === void 0 ? void 0 : _a.message })));
                                    } }));
                            } })),
                    React.createElement(material_1.Box, { sx: {
                            display: "flex",
                            alignItems: "center",
                            "& > :not(style)": { m: 1, width: "20ch" }
                        } },
                        React.createElement(react_hook_form_1.Controller, { name: "document_id", rules: {
                                required: true
                            }, control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "document_id", type: "text" }, register("document_id"), { error: !!errors.document_id, helperText: (_b = errors.document_id) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "document_no", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "document_no", type: "text" }, register("document_no"), { error: !!errors.document_no, helperText: (_b = errors.document_no) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "document_name", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "name", type: "text" }, register("document_name"), { error: !!errors.document_name, helperText: (_b = errors.document_name) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "issued_by", control: control, render: function (_a) {
                                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                                return (React.createElement(LocalizationProvider_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs },
                                    React.createElement(DatePicker_1.DatePicker, __assign({ defaultValue: yesterday, disablePast: true, sx: { width: 150, height: 50 }, views: ["year", "month", "day"], slotProps: {
                                            textField: {
                                                helperText: "DD/MM/YYYY"
                                            }
                                        } }, register("issued_by"), { label: "issued_by", onChange: function (value) {
                                            setDateIssue(value);
                                        } }))));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "exp_date", control: control, render: function (_a) {
                                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                                return (React.createElement(LocalizationProvider_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs },
                                    React.createElement(DatePicker_1.DatePicker, __assign({ sx: { width: 150, height: 50 }, defaultValue: today, disablePast: true, views: ["year", "month", "day"], slotProps: {
                                            textField: {
                                                helperText: "DD/MM/YYYY"
                                            }
                                        } }, register("exp_date"), { label: "exp_date", onChange: function (value) {
                                            setDateExpiry(value);
                                        } }))));
                            } })))),
            React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap" }, className: style_module_css_1["default"].ContorllerTexBox },
                React.createElement("fieldset", null,
                    React.createElement(material_1.Box, { sx: {
                            display: "flex",
                            alignItems: "center",
                            "& > :not(style)": { m: 1, width: "20ch" }
                        } },
                        React.createElement(react_hook_form_1.Controller, { name: "career_id", control: control, render: function (_a) {
                                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                                return (React.createElement(Autocomplete_1["default"], { sx: { width: 150 }, options: career_id, autoHighlight: true, onChange: function (e, value) {
                                        setCareerID(value._id);
                                    }, id: "controllable-states-demo", getOptionLabel: function (option) { return "" + option.value_LA; }, renderOption: function (props, option) {
                                        var key = props.key, optionProps = __rest(props, ["key"]);
                                        return (React.createElement(material_1.Box, __assign({ key: option._id, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                                    }, renderInput: function (params) {
                                        var _a;
                                        return (React.createElement(material_1.TextField, __assign({}, params, register("career_id"), { label: "Choose a career_id", slotProps: {
                                                htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                            }, error: !!errors.career_id, helperText: (_a = errors.career_id) === null || _a === void 0 ? void 0 : _a.message, size: "small" })));
                                    } }));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "work_place", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, ref = _c.ref;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "work_place", type: "text" }, register("work_place"), { error: !!errors.work_place, helperText: (_b = errors.work_place) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "work_place_tel", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value, ref = _c.ref;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "work_place_tel", type: "text" }, register("work_place_tel"), { error: !!errors.work_place_tel, helperText: (_b = errors.work_place_tel) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                            } })))),
            React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap" }, className: style_module_css_1["default"].ContorllerTexBox },
                React.createElement("fieldset", null,
                    React.createElement(material_1.Box, { sx: {
                            display: "flex",
                            alignItems: "center",
                            "& > :not(style)": { m: 1, width: "20ch" }
                        } },
                        React.createElement(react_hook_form_1.Controller, { name: "marital_status_id", control: control, render: function (_a) {
                                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                                return (React.createElement(Autocomplete_1["default"], { sx: { width: 150 }, options: marital_status_id, autoHighlight: true, onChange: function (e, value) {
                                        setMaritalStatusID(value._id);
                                    }, getOptionLabel: function (option) { return "" + option.value_LA; }, renderOption: function (props, option) {
                                        var key = props.key, optionProps = __rest(props, ["key"]);
                                        return (React.createElement(material_1.Box, __assign({ key: option._id, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                                    }, renderInput: function (params) {
                                        var _a;
                                        return (React.createElement(material_1.TextField, __assign({}, params, register("marital_status_id"), { label: "Choose a marital_status_id", slotProps: {
                                                htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                            }, error: !!errors.marital_status_id, helperText: (_a = errors.marital_status_id) === null || _a === void 0 ? void 0 : _a.message, size: "small" })));
                                    } }));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "married_couple_id", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "married_couple_id", type: "text" }, register("married_couple_id"), { error: !!errors.married_couple_id, helperText: (_b = errors.married_couple_id) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "married_couple_firstname_LA", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "married_couple_firstname_LA", type: "text" }, register("married_couple_firstname_LA"), { error: !!errors.married_couple_firstname_LA, helperText: (_b = errors.married_couple_firstname_LA) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "married_couple_lastname_LA", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "married_couple_lastname_LA", type: "text" }, register("married_couple_lastname_LA"), { error: !!errors.married_couple_lastname_LA, helperText: (_b = errors.married_couple_lastname_LA) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "married_couple_dateofbirth", control: control, render: function (_a) {
                                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                                return (React.createElement(LocalizationProvider_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs },
                                    React.createElement(DatePicker_1.DatePicker, __assign({ sx: { width: 150 }, defaultValue: today, disablePast: true, views: ["year", "month", "day"], slotProps: {
                                            textField: {
                                                helperText: "DD/MM/YYYY"
                                            }
                                        } }, register("married_couple_dateofbirth"), { label: "married_couple_dateofbirth", onChange: function (value) {
                                            setMarriedCoupleDateOfBirth(value);
                                        } }))));
                            } }),
                        " "),
                    React.createElement(material_1.Box, { sx: {
                            display: "flex",
                            alignItems: "center",
                            "& > :not(style)": { m: 1, width: "20ch" }
                        } },
                        React.createElement(react_hook_form_1.Controller, { name: "married_couple_career_id", control: control, render: function (_a) {
                                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                                return (React.createElement(Autocomplete_1["default"], { sx: { width: 150 }, options: career_id, autoHighlight: true, onChange: function (e, value) {
                                        setMarriedCoupleCareerID(value._id);
                                    }, id: "controllable-states-demo", getOptionLabel: function (option) { return "" + option.value_LA; }, renderOption: function (props, option) {
                                        var key = props.key, optionProps = __rest(props, ["key"]);
                                        return (React.createElement(material_1.Box, __assign({ key: option._id, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                                    }, renderInput: function (params) {
                                        var _a;
                                        return (React.createElement(material_1.TextField, __assign({}, params, register("married_couple_career_id"), { label: "Choose a career_id", slotProps: {
                                                htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                            }, error: !!errors.married_couple_career_id, helperText: (_a = errors.married_couple_career_id) === null || _a === void 0 ? void 0 : _a.message, size: "small" })));
                                    } }));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "married_couple_work_place_tel", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "tel", type: "text" }, register("married_couple_work_place_tel"), { error: !!errors.married_couple_work_place_tel, helperText: (_b = errors.married_couple_work_place_tel) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                            } }),
                        React.createElement(react_hook_form_1.Controller, { name: "married_couple_work_place", control: control, render: function (_a) {
                                var _b;
                                var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                                return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "work_place", type: "text" }, register("married_couple_work_place"), { error: !!errors.married_couple_work_place, helperText: (_b = errors.married_couple_work_place) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                            } })))),
            React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap", justifyContent: "center" }, className: style_module_css_1["default"].ContorllerTexBox },
                React.createElement(material_1.Button, { variant: "contained", type: "submit", startIcon: React.createElement(icons_material_1.Save, null), onClick: Insert }, "Insert"),
                React.createElement(material_1.Button, { variant: "contained", startIcon: React.createElement(icons_material_1.Clear, null), type: "reset" }, "Clear"))),
        React.createElement(react_toastify_1.ToastContainer, null)));
}
exports["default"] = DraggableDialog;
