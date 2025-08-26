import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";

const datagrid = ({props}) => {

  function getRowId(row) {
    console.log(row)
    return
  }
  

      function CustomToolbar() {
    return (

      <GridToolbarContainer>

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
        rows={props.rows}
        columns={props.cloumns}
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
      />    </>
  )
}

export default datagrid

const styles = StyleSheet.create({})