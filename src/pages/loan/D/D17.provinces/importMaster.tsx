import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, Stack } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "../../../../api/apiMonday";

import * as XLSX from "xlsx";

import { toast } from "react-toastify";

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
  const EXT = ["xlsx", "xls", "csv", "pdf"];
  const [colDefs, setColDefs] = React.useState();
  const [data, setData] = React.useState('');
  const [file, setFile] = React.useState();


const  getFK = async (value)=> {

 return axios.post("/country/readone",{id:value})
      .then((e) =>{
        setData(e.data.data[0]._id)  
              console.log(e.data.data[0]._id)
        return e
      })
      .catch((err) => {
        console.log(err)});
}
  const getExention = (file) => {
    const parts = file.name.split(".");
    const extension = parts[parts.length - 1];
    return EXTENSIONS.includes(extension); // return boolean
  };

  const convertToJson = (headers, data) => {
    const rows = [];
    data.forEach((e) => {
      let rowData = {};

      e.forEach((element, index) => {
        rowData[headers[index]] = element;
      });
      rows.push(rowData);
    });
    return rows;
  };

  const HandleImportExcel1 = async (event) => {
    console.log(event.target.files);
    const file = event.target.files[0];
    const render = new FileReader();
    render.readAsArrayBuffer(file);

    
    render.addEventListener("load",async (event) => {
      const bstr = event.target.result;
      // console.log(bstr);
      // const workbook = XLSX.utils.table_to_book(bstr);
      const workbook = XLSX.read(bstr, { type: "binary" });
      const workSheetName = workbook.SheetNames[0];
      const workSheet = workbook.Sheets[workSheetName];
      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
      console.log(fileData);

      const rows = fileData.map(async(e,index) =>  {

        if(index == 0){
                console.log("index:"+ index + " is header");

          return;
        }

const result=await axios.post("/country/readone",{id:e[3]})
      .then((e) =>{
              console.log(e.data.data[0]._id)
              return e.data.data[0]._id
      })
      .catch((err) => {
        return err});

let set = {
          id:"" + e[0],
          value:""+ e[1],
          province_code: ""+e[2],
          country_code:""+ e[3],
          country_id:result,
          }
          
       axios
      .post("/provinces/create",set)
      .then((e) => 

      console.log(index)

      )
      .catch((err) => toast.error(err));

      });


    });
  };

  return (
    <>
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

    </>
  );
}
