import * as React from "react";
import {
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridRowModes,
  GridRowEditStopReasons,
  GridActionsCellItem,
  GridToolbarExport,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import moment from "moment";
import { Fab, Paper, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { green, grey } from "@mui/material/colors";
import axios, {
  EmailRegExp,
  PhoneRegExp,
  PasswordRegExp,
} from "../../../api/apiMonday";

import { UserContext } from "../../../context/Context";

import { ImageBackground } from "react-native";
import { Add } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

import Fingerprint from "@mui/icons-material/Fingerprint";
import FormEdit from "./DialogData";
import InsertData from "./InsertData";
import EditData from "./EditData";
import DeleteData from "./DeleteData";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
export default function ExportDefaultToolbar() {
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
  React.useEffect(() => {
    axios
      .get("/personal_info/read")
      .then((result) => {
        setData(result.data.data);
        console.log(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
     
    
  }, []);
  const rows = data1;

  const cloumns = React.useMemo(() => [
    { field: "_id", headerName: "_id", width: 150 },
    { field: "id", headerName: "id", width: 150 },
    { field: "firstname_LA", headerName: "firstname_LA", width: 150 },
    { field: "lastname_LA", headerName: "lastname_LA", width: 150 },
       { field: "firstname_EN", headerName: "lastname_EN", width: 150 },
    { field: "lastname_EN", headerName: "lastname_EN", width: 150 },
    {
      field: "dateofbirth",
      headerName: "dateofbirth",
      width: 150,
      renderCell: (params) =>
        moment(params.row.created_date).format("DD-MM-YYYY"),
    },
    { field: "age", headerName: "age", width: 150 },
{
      field: "created_date",
      headerName: "created_date",
      width: 150,
      renderCell: (params) =>
        moment(params.row.created_date).format("HH:MM:SS/DD-MM-YYYY"),
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
