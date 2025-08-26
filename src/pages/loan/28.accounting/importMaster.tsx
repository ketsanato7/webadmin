import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, Stack } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "../../../api/apiMonday";

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

      const rows = fileData.map(async (e, index) => {
        if (index == 0) {
          length;
          console.log("index:" + index + " is header");

          return;
        }
        const d={id:e[2]}
        const result = await axios.post("/accounting_types/readone",d)
          .then((e) => {
            return e.data.data._id;
          })
          .catch((err) => {
            console.log(err)
            return err;
          });
        const q = e[0].toString();
        let accounting_level_code = "";
        let accounting_level_id = "";
        let accounting_group_code = "1";
        let accounting_group_id = "6868b4a254d612f3fc7f1968";
        if (q == 3) {
          accounting_level_code = "1";
          accounting_level_id = "6868b43b54d612f3fc7f195e";
        } else if (q == 4) {
          accounting_level_code = "2";

          accounting_level_id = "6868b44a54d612f3fc7f1960";
        } else if (q == 5) {
          accounting_level_code = "3";
          accounting_level_id = "6868b45154d612f3fc7f1962";
        } else if (q == 6) {
          accounting_level_code = "4";

          accounting_level_id = "6868b45a54d612f3fc7f1964";
        } else if (q == 7) {
          accounting_level_code = "5";

          accounting_level_id = "6868b46354d612f3fc7f1966";
        } else {
          accounting_level_code = "";
          accounting_level_id = "";
        }

        const set = {
          id: e[3],
          account_code:""+ e[0],
          account_name: "" + e[1],
          accounting_type_code: ""+e[2],
          accounting_type_id: "" + result,
          accounting_level_code: "" + accounting_level_code,
          accounting_level_id: "" + accounting_level_id,
          accounting_group_code: "" + accounting_group_code,
          accounting_group_id: "" + accounting_group_id,
        };

        axios
          .post("/accounting/create", set)
          .then((e) => console.log(index))
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
