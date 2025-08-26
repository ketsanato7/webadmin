import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Autocomplete, Box, Button, Grid, Paper, Stack, styled, TextField } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";

import FormWrapperProps from "../../../component/FormInsert1";
import axios from "../../../api/apiMonday";

import { schema } from "../../../schems/loan/2.lao_id_cards";
import { Clear, Save } from "@mui/icons-material";
import css from "../../../style.module.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';
import {get_data} from '../../../api/loan/DataSet/D7.educations'
import Item from "../../../component/Item";

export default function DraggableDialog({ porps }) {


  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
      const [education_level_id, setEducation_level_id] = React.useState([])

    const [EducationLevelID, setEducationLevelID] = React.useState("");
const result=get_data()

const today = dayjs();
  const yesterday = dayjs().subtract(1, "day");
  const onSubmit = (data) => {
    console.log("insety");

    const result = schema.safeParse(data);

    if (!result.success) {
    } else {
      axios
        .post("/lao_id_cards/create", result.data)
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
      <FormWrapperProps title={"Employee"}>

        <form onSubmit={handleSubmit(onSubmit)}                         
>

    
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
            name="contact_info"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                id="outlined-basic"
                label="contact_info"
                type="text"
                {...register("contact_info")}
                error={!!errors.contact_info}
                helperText={errors.contact_info?.message}
                variant="outlined"
                size="small"
              />
            )}
          />
      <Controller
                name="education_level_id"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Autocomplete
                    sx={{ width: 150 }}
                    options={result.data}
                    autoHighlight
                    onChange={(e, value) => {
                      setEducationLevelID(value._id);
                    }}
                    id="controllable-states-demo"
                    getOptionLabel={(option) => `${option.value_LA}`}
                    renderOption={(props, option) => {
                      const { key, ...optionProps } = props;
                      return (
                        <Box
                          key={option._id}
                          component="li"
                          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                          {...optionProps}
                        >
                          {option.value_LA}
                        </Box>
                      );
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        {...register("education_level_id")}
                        label="Choose a education_level_id"
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          },
                        }}
                        error={!!errors.education_level_id}
                        helperText={errors.education_level_id?.message}
                        size="small"
                      />
                    )}
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
            name="date_of_employment"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  defaultValue={yesterday}
                  sx={{ width: 150, height: 50 }}
                  views={["year", "month", "day"]}
                  slotProps={{
                    textField: {
                      helperText: "DD/MM/YYYY",
                    },
                  }}
                  {...register("date_of_employment")}
                  label="date_of_employment"
                  onChange={(value) => {
                    setDateOfIssue(value);
                  }}
                
                />
                
              </LocalizationProvider>
            )}
          />

  <Controller
            name="field_of_study"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                id="outlined-basic"
                label="field_of_study"
                type="text"
                {...register("field_of_study")}
                error={!!errors.field_of_study}
                helperText={errors.field_of_study?.message}
                variant="outlined"
                size="small"
              />
            )}
          />
                

</Box>

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
