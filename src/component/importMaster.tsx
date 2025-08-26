import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, Stack } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { PDFAcroForm, PDFDocument, PDFObject, PDFObjectParser } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import axios from "../api/apiMonday";
import * as XLSX from "xlsx";
import Datagrid from "./ImportMasterDataGird";
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
  const [data, setData] = React.useState([]);
  const [file, setFile] = React.useState();
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

  const HandleImportExcel = (event) => {
    console.log(event.target.files);
    const file = event.target.files[0];
    const render = new FileReader();
    render.readAsArrayBuffer(file);

    render.addEventListener("load", (event) => {
      const bstr = event.target.result;
      // console.log(bstr);
      // const workbook = XLSX.utils.table_to_book(bstr);
      const workbook = XLSX.read(bstr, { type: "binary" });
      const workSheetName = workbook.SheetNames[0];
      const workSheet = workbook.Sheets[workSheetName];
      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
      const header = fileData[1];
      const heads = header.map((e) => ({ title: e }));

      fileData.splice(0, 1);

      console.log(heads);
      console.log(fileData);
    });
  };
  const HandleImportExcel1 = (event) => {
    console.log(event.target.files);
    const file = event.target.files[0];
    const render = new FileReader();
    render.readAsArrayBuffer(file);

    render.addEventListener("load", (event) => {
      const bstr = event.target.result;
      // console.log(bstr);
      // const workbook = XLSX.utils.table_to_book(bstr);
      const workbook = XLSX.read(bstr, { type: "binary" });
      const workSheetName = workbook.SheetNames[0];
      const workSheet = workbook.Sheets[workSheetName];
      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
      console.log(fileData);

      const rows = fileData.map((e,index) => {
let AccountingGroupID="";

if(e[2] == "1"){
AccountingGroupID="684c67524eef690f9c00d28a"
}else if(e[2] == "2"){
  AccountingGroupID="684c716637c50783dc96315f"

}else if(e[2] == "3"){
  AccountingGroupID="684c718137c50783dc963161"

}else if(e[2] == "4"){
  AccountingGroupID="684c71a637c50783dc963163"

}else if(e[2] == "5"){
  AccountingGroupID="684c71c837c50783dc963165"

}else if(e[2] == "6"){
  AccountingGroupID="684d0fb6fd811424935aab81"

}else if(e[2] == "7"){
  AccountingGroupID="684d0fb9fd811424935aab83"

}else if(e[2] == "8"){
  AccountingGroupID="684d0fbdfd811424935aab85"

}else if(e[2] == "9"){
  AccountingGroupID="684d0fc1fd811424935aab87"

}
const set = {
          _id:""+index,
          AccountingCode:""+ e[0],
          AccountingName: ""+e[1],
          AccountingGroupID:""+ AccountingGroupID,
          AccountingStatus: "",
          LevelAccountingID: "",
        }
 axios
      .post("/Accounting/create", {
          AccountingCode:""+ e[0],
          AccountingName: ""+e[1],
          AccountingGroupID:""+ AccountingGroupID,
          AccountingStatus: "",
          LevelAccountingID: "684c857c86b54a85ff86b978",
        })
      .then((e) => {
      console.log(index)
      })
      .catch((err) => toast.error(err));

return set
        
      });
setData(rows)
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

      <Datagrid props={data} />
    </>
  );
}
