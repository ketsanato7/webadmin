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
                  label="owner_id"
                  type="text"
                  {...register("owner_id")}
                  error={!!errors.owner_id}
                  helperText={errors.owner_id?.message}
                  variant="outlined"
                  size="small"
                />
              )}
            />
                              
             <Controller
                                    name="category_id"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                      <Autocomplete
                                        sx={{ width: 150 }}
                                        options={get_data().data}
                                        autoHighlight
                                        getOptionLabel={(option) => `${option.value_LA}`}
                                        onChange={(event, value) => {
                                          setCollateralCategories(value._id);
                                        }}
                                        renderOption={(props, option) => {
                                          const { key, ...optionProps } = props;
                    
                                          return (
                                            <Box
                                              key={key}
                                              component="li"
                                              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                                              {...optionProps}
                                            >
                                              {option.value_LA}
                                            </Box>
                                          );
                                        }}
                                        renderInput={(params, option) => {
                                          return (
                                            <TextField
                                              {...params}
                                              {...register("category_id")}
                                              label="Choose a category_id"
                                              slotProps={{
                                                htmlInput: {
                                                  ...params.inputProps,
                                                  autoComplete: "new-password", // disable autocomplete and autofill
                                                },
                                              }}
                                              error={!!errors.category_id}
                                              helperText={errors.category_id?.message}
                                              size="small"
                                            />
                                          );
                                        }}
                                      />
                                    )}
                                  />
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  id="outlined-basic"
                  label="name"
                  type="text"
                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  variant="outlined"
                  size="small"
                />
              )}
            />

            <Controller
              name="collateral_no"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  id="outlined-basic"
                  label="collateral_no"
                  type="text"
                  {...register("collateral_no")}
                  error={!!errors.collateral_no}
                  helperText={errors.collateral_no?.message}
                  variant="outlined"
                  size="small"
                />
              )}
            />
                 <Controller
              name="date_of_issue"
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
                    {...register("date_of_issue")}
                    label="date_of_issue"
                    onChange={(value) => {
                      setDateOfIssue(value);
                    }}
                  />
                </LocalizationProvider>
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
              name="value"
              control={control}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <TextField
                  id="outlined-basic"
                  label="value"
                  type="text"
                  {...register("value")}
                  error={!!errors.value}
                  helperText={errors.value?.message}
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
                      name="other_details"
                      control={control}
                      render={({
                        field: { onChange, onBlur, value },
                        fieldState: { error },
                      }) => (
                        <TextField
                          id="outlined-basic"
                          label="other_details"
                          type="text"
                          {...register("other_details")}
                          error={!!errors.other_details}
                          helperText={errors.other_details?.message}
                          variant="outlined"
                          size="small"
                        />
                      )}
                    />
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
