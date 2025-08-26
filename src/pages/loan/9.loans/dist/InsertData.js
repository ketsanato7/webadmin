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
var D19_loan_purposes_1 = require("../../../api/loan/DataSet/D19.loan_purposes");
var D11_loan_classifications_1 = require("../../../api/loan/DataSet/D11.loan_classifications");
var D10_loan_categories_1 = require("../../../api/loan/DataSet/D10.loan_categories");
var D3_customer_types_1 = require("../../../api/loan/DataSet/D3.customer_types");
var D6_economic_sectors_1 = require("../../../api/loan/DataSet/D6.economic_sectors");
var D5_economic_branches_1 = require("../../../api/loan/DataSet/D5.economic_branches");
var D13_borrower_connections_1 = require("../../../api/loan/DataSet/D13.borrower_connections");
var D12_loan_funding_sources_1 = require("../../../api/loan/DataSet/D12.loan_funding_sources");
var _2_lao_id_cards_1 = require("../../../schems/loan/2.lao_id_cards");
var icons_material_1 = require("@mui/icons-material");
var style_module_css_1 = require("../../../style.module.css");
var x_date_pickers_1 = require("@mui/x-date-pickers");
var AdapterDayjs_1 = require("@mui/x-date-pickers/AdapterDayjs");
var dayjs_1 = require("dayjs");
function DraggableDialog(_a) {
    var porps = _a.porps;
    var _b = React.useState(""), UserOfLoan = _b[0], setUseOfLoan = _b[1];
    var _c = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(_2_lao_id_cards_1.schema)
    }), register = _c.register, control = _c.control, handleSubmit = _c.handleSubmit, errors = _c.formState.errors, reset = _c.reset;
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
        React.createElement(FormInsert_1["default"], { title: "lao_id_card" },
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
                    React.createElement(react_hook_form_1.Controller, { name: "from_date", control: control, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                            return (React.createElement(x_date_pickers_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs },
                                React.createElement(x_date_pickers_1.DatePicker, __assign({ defaultValue: yesterday, sx: { width: 150, height: 50 }, views: ["year", "month", "day"], slotProps: {
                                        textField: {
                                            helperText: "DD/MM/YYYY"
                                        }
                                    } }, register("from_date"), { label: "from_date", onChange: function (value) {
                                        setDateOfIssue(value);
                                    } }))));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "to_date", control: control, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                            return (React.createElement(x_date_pickers_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs },
                                React.createElement(x_date_pickers_1.DatePicker, __assign({ defaultValue: yesterday, sx: { width: 150, height: 50 }, views: ["year", "month", "day"], slotProps: {
                                        textField: {
                                            helperText: "DD/MM/YYYY"
                                        }
                                    } }, register("to_date"), { label: "to_date", onChange: function (value) {
                                        setExpDate(value);
                                    } }))));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "use_of_loan", control: control, rules: { required: true }, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                            return (React.createElement(material_1.Autocomplete, { sx: { width: 150 }, options: D19_loan_purposes_1.get_data().data, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value_LA; }, onChange: function (event, value) {
                                    setUseOfLoan(value._id);
                                }, renderOption: function (props, option) {
                                    var key = props.key, optionProps = __rest(props, ["key"]);
                                    return (React.createElement(material_1.Box, __assign({ key: key, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                                }, renderInput: function (params, option) {
                                    var _a;
                                    return (React.createElement(material_1.TextField, __assign({}, params, register("use_of_loan"), { label: "Choose a use_of_loan", slotProps: {
                                            htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                        }, error: !!errors.category_id, helperText: (_a = errors.category_id) === null || _a === void 0 ? void 0 : _a.message, size: "small" })));
                                } }));
                        } })),
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        alignItems: "center",
                        "& > :not(style)": { width: "20ch" }
                    } },
                    React.createElement(react_hook_form_1.Controller, { name: "approved_balance", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "approved_balance", type: "text" }, register("approved_balance"), { error: !!errors.approved_balance, helperText: (_b = errors.approved_balance) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "remaining_balance", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "remaining_balance", type: "text" }, register("remaining_balance"), { error: !!errors.remaining_balance, helperText: (_b = errors.remaining_balance) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "allowance_losses", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "allowance_losses", type: "text" }, register("allowance_losses"), { error: !!errors.allowance_losses, helperText: (_b = errors.allowance_losses) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } })),
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        alignItems: "center",
                        "& > :not(style)": { width: "20ch" }
                    } },
                    React.createElement(react_hook_form_1.Controller, { name: "interest_rate", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "interest_rate", type: "text" }, register("interest_rate"), { error: !!errors.interest_rate, helperText: (_b = errors.interest_rate) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "loan_classifications", control: control, rules: { required: true }, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                            return (React.createElement(material_1.Autocomplete, { sx: { width: 150 }, options: D11_loan_classifications_1.get_loan_classifications().data, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value_LA; }, onChange: function (event, value) {
                                    setUseOfLoan(value._id);
                                }, renderOption: function (props, option) {
                                    var key = props.key, optionProps = __rest(props, ["key"]);
                                    return (React.createElement(material_1.Box, __assign({ key: key, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                                }, renderInput: function (params, option) {
                                    var _a;
                                    return (React.createElement(material_1.TextField, __assign({}, params, register("loan_classifications"), { label: "Choose a loan_classifications", slotProps: {
                                            htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                        }, error: !!errors.loan_classifications, helperText: (_a = errors.loan_classifications) === null || _a === void 0 ? void 0 : _a.message, size: "small" })));
                                } }));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "classification_date", control: control, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                            return (React.createElement(x_date_pickers_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs },
                                React.createElement(x_date_pickers_1.DatePicker, __assign({ defaultValue: yesterday, sx: { width: 150, height: 50 }, views: ["year", "month", "day"], slotProps: {
                                        textField: {
                                            helperText: "DD/MM/YYYY"
                                        }
                                    } }, register("classification_date"), { label: "classification_date", onChange: function (value) {
                                        setDateOfIssue(value);
                                    } }))));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "loan_categories_id", control: control, rules: { required: true }, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                            return (React.createElement(material_1.Autocomplete, { sx: { width: 150 }, options: D10_loan_categories_1.get_loan_categories().data, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value_LA; }, onChange: function (event, value) {
                                    setUseOfLoan(value._id);
                                }, renderOption: function (props, option) {
                                    var key = props.key, optionProps = __rest(props, ["key"]);
                                    return (React.createElement(material_1.Box, __assign({ key: key, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                                }, renderInput: function (params, option) {
                                    var _a;
                                    return (React.createElement(material_1.TextField, __assign({}, params, register("loan_categories_id"), { label: "Choose a loan_categories_id", slotProps: {
                                            htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                        }, error: !!errors.loan_categories_id, helperText: (_a = errors.loan_categories_id) === null || _a === void 0 ? void 0 : _a.message, size: "small" })));
                                } }));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "restructured_date", control: control, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                            return (React.createElement(x_date_pickers_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs },
                                React.createElement(x_date_pickers_1.DatePicker, __assign({ defaultValue: yesterday, sx: { width: 150, height: 50 }, views: ["year", "month", "day"], slotProps: {
                                        textField: {
                                            helperText: "DD/MM/YYYY"
                                        }
                                    } }, register("restructured_date"), { label: "restructured_date", onChange: function (value) {
                                        setDateOfIssue(value);
                                    } }))));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "write_off_date", control: control, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                            return (React.createElement(x_date_pickers_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs },
                                React.createElement(x_date_pickers_1.DatePicker, __assign({ defaultValue: yesterday, sx: { width: 150, height: 50 }, views: ["year", "month", "day"], slotProps: {
                                        textField: {
                                            helperText: "DD/MM/YYYY"
                                        }
                                    } }, register("write_off_date"), { label: "write_off_date", onChange: function (value) {
                                        setDateOfIssue(value);
                                    } }))));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "remaining_balance", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "remaining_balance", type: "text" }, register("remaining_balance"), { error: !!errors.remaining_balance, helperText: (_b = errors.remaining_balance) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "allowance_losses", control: control, render: function (_a) {
                            var _b;
                            var _c = _a.field, onChange = _c.onChange, onBlur = _c.onBlur, value = _c.value;
                            return (React.createElement(material_1.TextField, __assign({ id: "outlined-basic", label: "allowance_losses", type: "text" }, register("allowance_losses"), { error: !!errors.allowance_losses, helperText: (_b = errors.allowance_losses) === null || _b === void 0 ? void 0 : _b.message, variant: "outlined", size: "small" })));
                        } })),
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        alignItems: "center",
                        "& > :not(style)": { width: "20ch" }
                    } },
                    React.createElement(react_hook_form_1.Controller, { name: "borrower_type_id", control: control, rules: { required: true }, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                            return (React.createElement(material_1.Autocomplete, { sx: { width: 150 }, options: D3_customer_types_1.get_customer_types().data, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value_LA; }, onChange: function (event, value) {
                                    setUseOfLoan(value._id);
                                }, renderOption: function (props, option) {
                                    var key = props.key, optionProps = __rest(props, ["key"]);
                                    return (React.createElement(material_1.Box, __assign({ key: key, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                                }, renderInput: function (params, option) {
                                    var _a;
                                    return (React.createElement(material_1.TextField, __assign({}, params, register("borrower_type_id"), { label: "Choose a borrower_type_id", slotProps: {
                                            htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                        }, error: !!errors.loan_categories_id, helperText: (_a = errors.loan_categories_id) === null || _a === void 0 ? void 0 : _a.message, size: "small" })));
                                } }));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "economic_sector_id", control: control, rules: { required: true }, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                            return (React.createElement(material_1.Autocomplete, { sx: { width: 150 }, options: D6_economic_sectors_1.get_economic_sectors().data, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value_LA; }, onChange: function (event, value) {
                                    setUseOfLoan(value._id);
                                }, renderOption: function (props, option) {
                                    var key = props.key, optionProps = __rest(props, ["key"]);
                                    return (React.createElement(material_1.Box, __assign({ key: key, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                                }, renderInput: function (params, option) {
                                    var _a;
                                    return (React.createElement(material_1.TextField, __assign({}, params, register("economic_sector_id"), { label: "Choose a economic_sector_id", slotProps: {
                                            htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                        }, error: !!errors.economic_sector_id, helperText: (_a = errors.economic_sector_id) === null || _a === void 0 ? void 0 : _a.message, size: "small" })));
                                } }));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "economic_branch_id", control: control, rules: { required: true }, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                            return (React.createElement(material_1.Autocomplete, { sx: { width: 150 }, options: D5_economic_branches_1.get_economic_branches().data, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value_LA; }, onChange: function (event, value) {
                                    setUseOfLoan(value._id);
                                }, renderOption: function (props, option) {
                                    var key = props.key, optionProps = __rest(props, ["key"]);
                                    return (React.createElement(material_1.Box, __assign({ key: key, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                                }, renderInput: function (params, option) {
                                    var _a;
                                    return (React.createElement(material_1.TextField, __assign({}, params, register("economic_branch_id"), { label: "Choose a economic_branch_id", slotProps: {
                                            htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                        }, error: !!errors.economic_branch_id, helperText: (_a = errors.economic_branch_id) === null || _a === void 0 ? void 0 : _a.message, size: "small" })));
                                } }));
                        } })),
                React.createElement(material_1.Box, { sx: {
                        display: "flex",
                        alignItems: "center",
                        "& > :not(style)": { width: "20ch" }
                    } },
                    React.createElement(react_hook_form_1.Controller, { name: "borrower_connection_id", control: control, rules: { required: true }, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                            return (React.createElement(material_1.Autocomplete, { sx: { width: 150 }, options: D13_borrower_connections_1.get_borrower_connections().data, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value_LA; }, onChange: function (event, value) {
                                    setUseOfLoan(value._id);
                                }, renderOption: function (props, option) {
                                    var key = props.key, optionProps = __rest(props, ["key"]);
                                    return (React.createElement(material_1.Box, __assign({ key: key, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                                }, renderInput: function (params, option) {
                                    var _a;
                                    return (React.createElement(material_1.TextField, __assign({}, params, register("borrower_connection_id"), { label: "Choose a borrower_connection_id", slotProps: {
                                            htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                        }, error: !!errors.borrower_connection_id, helperText: (_a = errors.borrower_connection_id) === null || _a === void 0 ? void 0 : _a.message, size: "small" })));
                                } }));
                        } }),
                    React.createElement(react_hook_form_1.Controller, { name: "funding_source_id", control: control, rules: { required: true }, render: function (_a) {
                            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value, ref = _b.ref;
                            return (React.createElement(material_1.Autocomplete, { sx: { width: 150 }, options: D12_loan_funding_sources_1.get_loan_funding_sources().data, autoHighlight: true, getOptionLabel: function (option) { return "" + option.value_LA; }, onChange: function (event, value) {
                                    setUseOfLoan(value._id);
                                }, renderOption: function (props, option) {
                                    var key = props.key, optionProps = __rest(props, ["key"]);
                                    return (React.createElement(material_1.Box, __assign({ key: key, component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } } }, optionProps), option.value_LA));
                                }, renderInput: function (params, option) {
                                    var _a;
                                    return (React.createElement(material_1.TextField, __assign({}, params, register("funding_source_id"), { label: "Choose a funding_source_id", slotProps: {
                                            htmlInput: __assign(__assign({}, params.inputProps), { autoComplete: "new-password" })
                                        }, error: !!errors.funding_source_id, helperText: (_a = errors.funding_source_id) === null || _a === void 0 ? void 0 : _a.message, size: "small" })));
                                } }));
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
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(material_1.Stack, { spacing: { xs: 1, sm: 1, p: 1 }, direction: "row", useFlexGap: true, sx: { flexWrap: "wrap", justifyContent: "center" }, className: style_module_css_1["default"].ContorllerTexBox },
                    React.createElement(material_1.Button, { variant: "contained", sx: { width: "25ch" }, type: "submit", startIcon: React.createElement(icons_material_1.Save, null) }, "Insert"),
                    React.createElement(material_1.Button, { variant: "contained", sx: { width: "25ch" }, startIcon: React.createElement(icons_material_1.Clear, null), type: "reset" }, "Clear"))))));
}
exports["default"] = DraggableDialog;
