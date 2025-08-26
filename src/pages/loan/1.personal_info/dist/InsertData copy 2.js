"use strict";
exports.__esModule = true;
var React = require("react");
var Dialog_1 = require("@mui/material/Dialog");
var DialogContent_1 = require("@mui/material/DialogContent");
var DialogTitle_1 = require("@mui/material/DialogTitle");
var icons_material_1 = require("@mui/icons-material");
var react_hook_form_1 = require("react-hook-form");
var apiMonday_1 = require("../../../api/apiMonday");
var material_1 = require("@mui/material");
var react_toastify_1 = require("react-toastify");
var zod_1 = require("@hookform/resolvers/zod");
var dailog_1 = require("../../../component/dailog");
var _1_personal_info_1 = require("../../../schems/loan/1.personal_info");
var dayjs_1 = require("dayjs");
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
        console.log(dataQuery);
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
                React.createElement(react_toastify_1.ToastContainer, null)))));
}
exports["default"] = DraggableDialog;
