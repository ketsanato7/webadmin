"use strict";
exports.__esModule = true;
var React = require("react");
var x_data_grid_1 = require("@mui/x-data-grid");
var moment_1 = require("moment");
var EditData_1 = require("./EditData");
var DeleteData_1 = require("./DeleteData");
var _1_personal_info_1 = require("../../../api/loan/1.personal_info");
var Insert_1 = require("./Insert");
function ExportDefaultToolbar() {
    var _a = React.useState(), data1 = _a[0], setData = _a[1];
    function getRowId(row) {
        console.log(row);
        return;
    }
    var a = _1_personal_info_1.get_personal_info();
    console.log(a.data);
    var rows = a.data;
    var cloumns = React.useMemo(function () { return [
        { field: "_id", headerName: "_id", width: 150 },
        { field: "id", headerName: "id", width: 150 },
        { field: "firstname_LA", headerName: "firstname_LA", width: 150 },
        { field: "lastname_LA", headerName: "lastname_LA", width: 150 },
        { field: "firstname_EN", headerName: "firstname_EN", width: 150 },
        { field: "lastname_EN", headerName: "lastname_EN", width: 150 },
        { field: "dateofbirth", headerName: "dateofbirth", width: 150 },
        { field: "age", headerName: "age", width: 150 },
        {
            field: "careers",
            headerName: "careers",
            width: 150,
            renderCell: function (params) {
                return React.createElement(React.Fragment, null,
                    " ",
                    params.row.careers[0].value_LA);
            }
        },
        {
            field: "genders",
            headerName: "genders",
            width: 150,
            renderCell: function (params) {
                return React.createElement(React.Fragment, null,
                    " ",
                    params.row.genders[0].value_LA);
            }
        },
        {
            field: "nationalities",
            headerName: "nationalities",
            width: 150,
            renderCell: function (params) {
                return React.createElement(React.Fragment, null,
                    " ",
                    params.row.nationalities[0].value_LA);
            }
        },
        {
            field: "villages",
            headerName: "villages",
            width: 150,
            renderCell: function (params) {
                return React.createElement(React.Fragment, null,
                    " ",
                    params.row.villages[0].value);
            }
        },
        {
            field: "districts",
            headerName: "districts",
            width: 150,
            renderCell: function (params) {
                return React.createElement(React.Fragment, null,
                    " ",
                    params.row.districts[0].value);
            }
        },
        {
            field: "provinces",
            headerName: "provinces",
            width: 150,
            renderCell: function (params) {
                return React.createElement(React.Fragment, null,
                    " ",
                    params.row.provinces[0].value);
            }
        },
        {
            field: "marital_statuses",
            headerName: "marital_statuses",
            width: 150,
            renderCell: function (params) {
                return React.createElement(React.Fragment, null,
                    " ",
                    params.row.marital_statuses[0].value_LA);
            }
        },
        {
            field: "contact_info",
            headerName: "contact_info",
            width: 150
        },
        {
            field: "created_date",
            headerName: "created_date",
            width: 150,
            renderCell: function (params) {
                return moment_1["default"](params.row.updated_date).format("HH:MM:SS/DD-MM-YYYY");
            }
        },
        {
            field: "updated_date",
            headerName: "updated_date",
            width: 150,
            renderCell: function (params) {
                return moment_1["default"](params.row.updated_date).format("HH:MM:SS/DD-MM-YYYY");
            }
        },
        {
            field: "Action",
            headerName: "Action",
            type: "actions",
            width: 150,
            renderCell: function (params) { return (React.createElement(React.Fragment, null,
                React.createElement(EditData_1["default"], { porps: params.row }),
                React.createElement(DeleteData_1["default"], { porps: params.row }))); }
        },
    ]; });
    function CustomToolbar() {
        return (React.createElement(x_data_grid_1.GridToolbarContainer, null,
            React.createElement(Insert_1["default"], null),
            React.createElement(x_data_grid_1.GridToolbarExport, { excelOptions: {
                    columnsStyles: {
                        recruitmentDay: { numFmt: "dd/mm/yyyy" },
                        // set this column in green
                        incomes: { font: { argb: "FF00FF00" } }
                    }
                } })));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(x_data_grid_1.DataGrid, { rows: rows, columns: cloumns, slots: {
                toolbar: CustomToolbar,
                printOptions: {
                    hideFooter: true
                },
                loadingOverlay: {
                    variant: "linear-progress",
                    noRowsVariant: "linear-progress"
                },
                hideFooter: true,
                hideToolbar: true
            }, initialState: {
                pagination: {
                    paginationModel: {
                        pageSize: 5
                    }
                }
            }, pageSizeOptions: ([5], [10], [20]), localeText: {
                toolbarDensity: "Size",
                toolbarDensityLabel: "Size",
                toolbarDensityCompact: "Small",
                toolbarDensityStandard: "Medium",
                toolbarDensityComfortable: "Large"
            }, getRowId: function (e) { return e._id; }, rowSelection: true })));
}
exports["default"] = ExportDefaultToolbar;
