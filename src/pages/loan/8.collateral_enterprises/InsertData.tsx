import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Autocomplete, Box, Button, Stack, TextField } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";

import FormWrapperProps from "../../../component/FormInsert";
import axios from "../../../api/apiMonday";

import { schema } from "../../../schems/loan/2.lao_id_cards";
import { Clear, Save } from "@mui/icons-material";
import css from "../../../style.module.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { get_data } from "../../../api/loan/DataSet/D2.collateral_categories";

export default function DraggableDialog({ porps }) {
      const [province_id, setProvice_id] = React.useState([]);
    const [village_id, setVillage_id] = React.useState([]);
    const [district_id, setDistrict_id] = React.useState([]);
  const [CollateralCategories,setCollateralCategories] = React.useState("")
  const today = dayjs();
  const yesterday = dayjs().subtract(1, "day");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("insety");

    const result = schema.safeParse(data);

    if (!result.success) {
    } else {
      axios
        .post("/enterprise_info/create", result.data)
        .then((result) => {
          if (result.data.status == true) {
            toast.success("ບັນທຶກສຳເລັດ");
            reset();
          } else {
            toast.error("ບໍ້ສາມາດບັນທຶກຂໍ້ມູນໄດ້");
          }
        })
        .catch((err) => toast.error(err));
    }
  };
  
   
  
   
  return (
    <>
      <FormWrapperProps title={"enterprise_info"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { width: "20ch" },
            }}
          >
            <Controller
              name="id"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  id="outlined-basic"
                  label="id"
                  type="text"
                  {...register("id")}
                  error={!!errors.id}
                  helperText={errors.id?.message}
                  variant="outlined"
                  size="small"
                />
              )}
            />
                              
          <Controller
              name="enterprise_id"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  id="outlined-basic"
                  label="enterprise_id"
                  type="text"
                  {...register("enterprise_id")}
                  error={!!errors.enterprise_id}
                  helperText={errors.enterprise_id?.message}
                  variant="outlined"
                  size="small"
                />
              )}
            />
                       
            <Controller
              name="collateral_id"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  id="outlined-basic"
                  label="collateral_id"
                  type="text"
                  {...register("collateral_id")}
                  error={!!errors.collateral_id}
                  helperText={errors.collateral_id?.message}
                  variant="outlined"
                  size="small"
                />
              )}
            />

       
       
          </Box>
       
          <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    "& > :not(style)": { width: "20ch" },
                                  }}
                                >
          
                         
            
                          <Controller
                      name="status"
                      control={control}
                      render={({
                        field: { onChange, onBlur, value },
                        fieldState: { error },
                      }) => (
                        <TextField
                          id="outlined-basic"
                          label="status"
                          type="text"
                          {...register("status")}
                          error={!!errors.status}
                          helperText={errors.status?.message}
                          variant="outlined"
                          size="small"
                        />
                      )}
                    />
                
                
                                </Box>
          <br />
          <br />
          <Stack
            spacing={{ xs: 1, sm: 1, p: 1 }}
            direction="row"
            useFlexGap
            sx={{ flexWrap: "wrap", justifyContent: "center" }}
            className={css.ContorllerTexBox}
          >
            <Button
              variant="contained"
              sx={{ width: "25ch" }}
              type="submit"
              startIcon={<Save />}
            >
              Insert
            </Button>
            <Button
              variant="contained"
              sx={{ width: "25ch" }}
              startIcon={<Clear />}
              type="reset"
            >
              Clear
            </Button>
          </Stack>
        </form>
      </FormWrapperProps>
    </>
  );
}
