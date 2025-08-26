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
import { Fab, Paper,FormHelperText, Button,MenuItem ,Select,InputLabel,FormControl} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { green, grey } from "@mui/material/colors";
import axios from "../../../api/apiMonday";
import { ImageBackground } from "react-native";
import { UserContext } from "../../../context/Context";
import {Add} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

import Fingerprint from "@mui/icons-material/Fingerprint";
import FormEdit from "./DialogData";
import InsertData from "./InsertData";
import EditData from "./EditData";
import DeleteData from "./DeleteData";
import { useForm } from "react-hook-form";

export default function ExportDefaultToolbar() {
  const [data1, setData1] = React.useState();
  const [UserType, setUserType] = React.useState('');
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
  const [selectRow, setSelectRow] = React.useState();
  const [data, setData] = React.useState([]);

  const [pageSize, setPageSize] = React.useState(5);
  const [rowId, setRowId] = React.useState(null);

  function getRowId(row) {
    console.log(row)
    return
  }


React.useEffect(() => {
  axios
    .get("/users1/read1")
    .then((result) => {
        setData1(result.data.data);
  
            }) 
   
              },[]);
  
  

  const rows = data1;

  const cloumns = React.useMemo(() => [
    { field: "_id", headerName: "_id", width: 150 },
    { field: "username", headerName: "username", width: 150 },
    { field: "password", headerName: "password", width: 150 },
    { field: "Tel", headerName: "Tel", width: 150 },
    {
      field: "user_online",
      headerName: "user_online",
      width: 150,
      renderCell: (params) =>
        params.row.user_online ? (
          <CheckCircleIcon sx={{ color: green[500] }} />
        ) : (
          <CheckCircleIcon sx={{ color: grey[500] }} />
        ),
    },
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
      field: "user_type_name",
      headerName: "user_type_name",
      width: 150,
      renderCell: (params) =>
        params.row.user_type_name.map((row) => row.user_type_name),
    },

    {
      field: "Action",
      headerName: "Action",
      type: "actions",
      width: 150,
      renderCell: (params) => (  <>   
         <EditData porps={params.row} />
         <DeleteData porps={params.row} />

        </>
      ),
    },
  
  ]);





  function CustomToolbar() {
    return (
      <GridToolbarContainer>
                   <InsertData/>
             

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
        pageSizeOptions={[5], [10], [20]}
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
