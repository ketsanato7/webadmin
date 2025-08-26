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

import {Query} from '../../../store/22.mfi_info'

export default function ExportDefaultToolbar() {
  const [data1, setData] = React.useState();
  const [UserType, setUserType] = React.useState();
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
  const [selectRow, setSelectRow] = React.useState();
  const [pageSize, setPageSize] = React.useState(5);
  const [rowId, setRowId] = React.useState(null);

  
  function getRowId(row) {
    console.log(row)
    return
  }

  React.useEffect(() => {
    axios
      .get("/mfi_info/read")
      .then((result) => {
        setData(result.data.data);
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
    { field: "firstname_EN", headerName: "firstname_EN", width: 150 },
    { field: "lastname_EN", headerName: "lastname_EN", width: 150 },
    { field: "dateofbirth", headerName: "dateofbirth", width: 150 },
    { field: "age", headerName: "age", width: 150 },

       {
      field: "gender_id",
      headerName: "gender_id",
      width: 150,
      renderCell: (params) =>
        params.row.Country.map((row) => row.CountryName),
    },   {
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
