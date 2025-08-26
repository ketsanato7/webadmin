import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import moment from "moment";
import axios from "../../../api/apiMonday";
import InsertData from "./InsertData copy";
import EditData from "./EditData";
import DeleteData from "./DeleteData";
import {get_personal_info} from "../../../api/loan/1.personal_info";
import FromSteper from "./FromSteper";
import Insert from "./Insert";
export default function ExportDefaultToolbar() {
  const [data1, setData] = React.useState();

  function getRowId(row) {
    console.log(row);
    return; 
  } 
  const a =get_personal_info();

  console.log(a.data)
  const rows = a.data;
  const cloumns = React.useMemo(() => [
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
      renderCell: (params) => {
        return <> {params.row.careers[0].value_LA}</>;
      },
    },
    {
      field: "genders",
      headerName: "genders",
      width: 150,
      renderCell: (params) => {
        return <> {params.row.genders[0].value_LA}</>;
      },
    },

    {
      field: "nationalities",
      headerName: "nationalities",
      width: 150,
      renderCell: (params) => {
        return <> {params.row.nationalities[0].value_LA}</>;
      },
    },

    {
      field: "villages",
      headerName: "villages",
      width: 150,
      renderCell: (params) => {
        return <> {params.row.villages[0].value}</>;
      },
    },

    {
      field: "districts",
      headerName: "districts",
      width: 150,
      renderCell: (params) => {
        return <> {params.row.districts[0].value}</>;
      },
    },
        {
      field: "provinces",
      headerName: "provinces",
      width: 150,
      renderCell: (params) => {
        return <> { params.row.provinces[0].value}</>;
      },
    },
    {
      field: "marital_statuses",
      headerName: "marital_statuses",
      width: 150,
      renderCell: (params) => {
        return <> {params.row.marital_statuses[0].value_LA}</>;
      },
    },
    {
      field: "contact_info",
      headerName: "contact_info",
      width: 150,
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
        <Insert/>
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
