"use strict";
exports.__esModule = true;
var React = require("react");
var x_data_grid_1 = require("@mui/x-data-grid");
var moment_1 = require("moment");
var InsertData_1 = require("./InsertData");
var EditData_1 = require("./EditData");
var DeleteData_1 = require("./DeleteData");
var D20_document_types_1 = require("../../../../api/loan/DataSet/D20.document_types");
function ExportDefaultToolbar(_a) {
    var props = _a.props;
    var _b = React.useState(), data1 = _b[0], setData = _b[1];
    var _c = React.useState(), UserType = _c[0], setUserType = _c[1];
    var _d = React.useState([]), rowSelectionModel = _d[0], setRowSelectionModel = _d[1];
    var _e = React.useState(), selectRow = _e[0], setSelectRow = _e[1];
    var _f = React.useState(5), pageSize = _f[0], setPageSize = _f[1];
    var _g = React.useState(null), rowId = _g[0], setRowId = _g[1];
    function getRowId(row) {
        console.log(row);
        return;
    }
    var data = D20_document_types_1.get_data();
    var rows = data.data;
    var cloumns = React.useMemo(function () { return [
        { field: "_id", headerName: "_id", width: 150 },
        { field: "id", headerName: "id", width: 150 },
        { field: "value_LA", headerName: "value_LA", width: 150 },
        { field: "value_EN", headerName: "value_EN", width: 150 },
        { field: "code_LA", headerName: "code_LA", width: 150 },
        { field: "code_EN", headerName: "code_EN", width: 150 },
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
            React.createElement(InsertData_1["default"], null),
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
