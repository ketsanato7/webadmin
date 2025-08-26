import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, Stack } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import * as XLSX from 'xlsx';
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});


export default function InputFileUpload() {
  const EXT=['xlsx','xls','csv'];
  const [colDefs, setColDefs] = React.useState();
  const [data, setData] = React.useState();

  const getExention = (file) => {
    const parts = file.name.split('.')
    const extension = parts[parts.length - 1]
    return EXTENSIONS.includes(extension) // return boolean
  }

  const convertToJson = (headers, data) => {
    const rows = [];
    data.forEach(e => {
      
      let rowData = {};
      
      e.forEach((element, index) => {
        rowData[headers[index]]= element;
      })
      rows.push(rowData)

    });
    return rows
  }

    const HandleImportExcel = (event) => {
        console.log(event.target.files)
    const file = event.target.files[0];
    const render = new FileReader();
    render.readAsArrayBuffer(file);

    render.addEventListener('load', (event) => {
        const bstr = event.target.result;
        // console.log(bstr);
        // const workbook = XLSX.utils.table_to_book(bstr);
         const workbook = XLSX.read(bstr, { type: "binary" });
         const workSheetName = workbook.SheetNames[0];
         const workSheet = workbook.Sheets[workSheetName];
         const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
         const header =fileData[1];
         const heads = header.map(e=>({title:e}));

         fileData.splice(0,1);

console.log(heads)
console.log(fileData)

    }
    
  )


  } 
    const HandleImportExcel1 = (event) => {
    console.log(event.target.files)
const file = event.target.files[0];
const render = new FileReader();
render.readAsArrayBuffer(file);

render.addEventListener('load', (event) => {
    const bstr = event.target.result;
    // console.log(bstr);
    // const workbook = XLSX.utils.table_to_book(bstr);
     const workbook = XLSX.read(bstr, { type: "binary" });
     const workSheetName = workbook.SheetNames[0];
     const workSheet = workbook.Sheets[workSheetName];
     const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
console.log(fileData)
const rows=fileData.map((e)=> {
  console.log(e)

  return {_id:e[0],
  username:e[1],
  password:e[2],
  tel:e[3]
  }
})
console.log(rows)

}

)


}
  

console.log(data)
  return (

      <Button
        sx={{ width: "25ch" }}
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        
        Upload files
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => HandleImportExcel1(event)}
          multiple

        />
      </Button>
  );
}
