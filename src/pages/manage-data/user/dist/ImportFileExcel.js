"use strict";
exports.__esModule = true;
var React = require("react");
var styles_1 = require("@mui/material/styles");
var material_1 = require("@mui/material");
var CloudUpload_1 = require("@mui/icons-material/CloudUpload");
var apiMonday_1 = require("../../../api/apiMonday");
var XLSX = require("xlsx");
var react_toastify_1 = require("react-toastify");
var VisuallyHiddenInput = styles_1.styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1
});
function InputFileUpload() {
    var EXTENSIONS = ["xlsx", "xls", "csv"];
    var _a = React.useState(), colDefs = _a[0], setColDefs = _a[1];
    var _b = React.useState([]), data = _b[0], setData = _b[1];
    var _c = React.useState(), file = _c[0], setFile = _c[1];
    var getExtension = function (file) {
        var parts = file.split(".");
        var extension = parts[parts.length - 1].toLowerCase();
        return EXTENSIONS.includes(extension);
    };
    var convertToJson = function (headers, data) {
        var rows = [];
        data.forEach(function (row) {
            var rowData = {};
            row.forEach(function (element, index) {
                rowData[headers[index]] = element;
            });
            rows.push(rowData);
        });
        return rows;
    };
    var HandleImportExcel1 = function (e) {
        var file = e.target.files[0];
        var render = new FileReader();
        render.addEventListener("load", function (e) {
            var bstr = e.target.result;
            // console.log(bstr);
            // const workbook = XLSX.utils.table_to_book(bstr);
            var workbook = XLSX.read(bstr, { type: "binary" });
            var workSheetName = workbook.SheetNames[0];
            var workSheet = workbook.Sheets[workSheetName];
            var fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
            var rows = fileData.map(function (e, index) {
                var set = {
                    id: "" + e[0],
                    value_LA: "" + e[1],
                    value_EN: "" + e[2],
                    code_LA: "" + e[3],
                    code_EN: "" + e[4],
                    status: ""
                };
                apiMonday_1["default"]
                    .post("/customer_types/create", set)
                    .then(function (e) {
                    return console.log(index);
                })["catch"](function (err) { return react_toastify_1.toast.error(err); });
            });
            render.readAsArrayBuffer(file);
            setData(rows);
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Button, { sx: { width: "25ch" }, component: "label", role: undefined, variant: "contained", tabIndex: -1, startIcon: React.createElement(CloudUpload_1["default"], null) },
            "Upload files",
            React.createElement(VisuallyHiddenInput, { type: "file", onChange: function (event) { return HandleImportExcel1(event); }, multiple: true }))));
}
exports["default"] = InputFileUpload;
