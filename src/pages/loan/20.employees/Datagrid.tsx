import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import moment from "moment";
import axios from "../../../api/apiMonday";
import InsertData from "./InsertData";
import EditData from "./EditData";
import DeleteData from "./DeleteData";
import { get_data } from "../../../api/loan/20.employees";

export default function ExportDefaultToolbar({ props }) {
  const [data1, setData] = React.useState();
  const [UserType, setUserType] = React.useState();
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
  const [selectRow, setSelectRow] = React.useState();
  const [pageSize, setPageSize] = React.useState(5);
  const [rowId, setRowId] = React.useState(null);

  function getRowId(row) {
    console.log(row);
    return;
  }
  const data=get_data();
  const rows = data.data
  console.log(rows)
  const cloumns = React.useMemo(() => [
    { field: "_id", headerName: "_id", width: 150 },
    { field: "id", headerName: "id", width: 150 },
    { field: "contact_info", headerName: "contact_info", width: 150 },
    { field: "date_of_employment", headerName: "date_of_employment", width: 150 },
    { field: "field_of_study", headerName: "field_of_study", width: 150 },

    {
      field: "date_of_issue",
      headerName: "date_of_issue",
      width: 150,
      renderCell: (params) =>
        moment(params.row.date_of_issue).format("HH:MM:SS/DD-MM-YYYY"),
    },
        {
      field: "exp_date",
      headerName: "exp_date",
      width: 150,
      renderCell: (params) =>
        moment(params.row.exp_date).format("HH:MM:SS/DD-MM-YYYY"),
    },
    {
      field: "created_date",
      headerName: "created_date",
      width: 150,
      renderCell: (params) =>
        moment(params.row.updated_date).format("HH:MM:SS/DD-MM-YYYY"),
    },
    {
      field: "updated_date",
      headerName: "updated_date",
      width: 150,
      renderCell: (params) =>
        moment(params.row.updated_date).format("HH:MM:SS/DD-MM-YYYY"),
    },

    {
      field: "Action",
      headerName: "Action",
      type: "actions",
      width: 150,
      renderCell: (params) => (
        <>
          <EditData porps={params.row} />
          <DeleteData porps={params.row} />
        </>
      ),
    },
  ]);

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <InsertData />

        <GridToolbarExport
          excelOptions={{
            columnsStyles: {
              recruitmentDay: { numFmt: "dd/mm/yyyy" },
              // set this column in green
              incomes: { font: { argb: "FF00FF00" } },
            },
          }}
        />
      </GridToolbarContainer>
    );
  }

  return (
    <>
      <DataGrid
        rows={rows}
        columns={cloumns}
        slots={{
          toolbar: CustomToolbar,
          printOptions: {
            hideFooter: true,
          },
          loadingOverlay: {
            variant: "linear-progress",
            noRowsVariant: "linear-progress",
          },

          hideFooter: true,
          hideToolbar: true,
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={([5], [10], [20])}
        localeText={{
          toolbarDensity: "Size",
          toolbarDensityLabel: "Size",
          toolbarDensityCompact: "Small",
          toolbarDensityStandard: "Medium",
          toolbarDensityComfortable: "Large",
        }}
        getRowId={(e) => e._id}
        rowSelection={true}
      />
    </>
  );
}
