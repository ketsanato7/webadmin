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
import dayjs from 'dayjs';

export default function DraggableDialog({ porps }) {
    const [data, setData] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState();
    const [province_id, setProvice_id] = React.useState([]);
  const [village_id, setVillage_id] = React.useState([]);
  const [district_id, setDistrict_id] = React.useState([]);
    const form1 = React.useRef();
    const [GenderID, setGenderID] = React.useState("");
    const [NationalityID, setNationalityID] = React.useState("");
    const [MaritalStatusID, setMaritalStatusID] = React.useState("");
    const [CareerID, setCareerID] = React.useState("");
    const [VillageID, setVillageID] = React.useState("");
    const [DistrictID, setDistrictID] = React.useState("");
    const [ProvinceID, setProvinceID] = React.useState("");
    const [DateOfBirth, setDateOfBirth] = React.useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
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
  
    React.useEffect(() => {
  
      axios.get("/provinces/read").then((result) => {
        setProvice_id(result.data.data);
      });
      
    }, []);
  
    const get_district = (value) => {
      const district_fk = {
        provice_id: value,
      };
      axios.post("/districts/read_fk", district_fk).then((result) => {
        setDistrict_id(result.data.data);
      });
    };
  
    const get_village = (value) => {
      const village_fk = {
        district_id: value,
      };
  
      axios.post("/villages/read_fk", village_fk).then((result) => {
        setVillage_id(result.data.data);
      });
    };

  return (
    <>
      <FormWrapperProps title={"mfi_info"}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          "& > :not(style)": { width: "20ch" },
                        }}
                      >

        <Controller
            name="owner_id"
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
            name="approved_date"
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
                  {...register("approved_date")}
                  label="approved_date"
                  onChange={(value) => {
                    setDateOfIssue(value);
                  }}
                
                />
                
              </LocalizationProvider>
            )}
          />
          <Controller
            name="name_LA"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                id="outlined-basic"
                label="name_LA"
                type="text"
                {...register("name_LA")}
                error={!!errors.id}
                helperText={errors.id?.message}
                variant="outlined"
                size="small"
              />
            )}
          />

          <Controller
            name="name_EN"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                id="outlined-basic"
                label="name_EN"
                type="text"
                {...register("name_EN")}
                error={!!errors.card_no}
                helperText={errors.card_no?.message}
                variant="outlined"
                size="small"
              />
            )}
          />



          <Controller
            name="card_name"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                id="outlined-basic"
                label="card_name"
                type="text"
                {...register("card_name")}
                error={!!errors.value_EN}
                helperText={errors.value_EN?.message}
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
          <Controller
            name="exp_date"
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
                  {...register("exp_date")}
                  label="exp_date"
                  onChange={(value) => {
                    setExpDate(value);
                  }}
                />
              </LocalizationProvider>
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
<Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          "& > :not(style)": { width: "20ch" },
                        }}
                      >

   <Controller
                          name="province_id"
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Autocomplete
                              sx={{ width: 150 }}
                              options={province_id}
                              autoHighlight
                              getOptionLabel={(option) => `${option.value}`}
                              onChange={(event, value) => {
                                get_district(value._id);
                                setProvinceID(value._id);
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
                                    {option.value}
                                  </Box>
                                );
                              }}
                              renderInput={(params, option) => {
                                return (
                                  <TextField
                                    {...params}
                                    {...register("province_id")}
                                    label="Choose a province_id"
                                    slotProps={{
                                      htmlInput: {
                                        ...params.inputProps,
                                        autoComplete: "new-password", // disable autocomplete and autofill
                                      },
                                    }}
                                    error={!!errors.province_id}
                                    helperText={errors.province_id?.message}
                                    size="small"
                                  />
                                );
                              }}
                            />
                          )}
                        />
                        <Controller
                          name="district_id"
                          control={control}
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Autocomplete
                              sx={{ width: 150 }}
                              options={district_id}
                              autoHighlight
                              getOptionLabel={(option) => `${option.value}`}
                              onChange={(event, value) => {
                                get_village(value._id);
                                setDistrictID(value._id);
                              }}
                              renderOption={(props, option) => {
                                const { key, ...optionProps } = props;
          
                                return (
                                  <Box
                                    key={option._id}
                                    component="li"
                                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                                    {...optionProps}
                                  >
                                    {option.value}
                                  </Box>
                                );
                              }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  {...register("district_id")}
                                  label="Choose a district_id"
                                  slotProps={{
                                    htmlInput: {
                                      ...params.inputProps,
                                      autoComplete: "new-password", // disable autocomplete and autofill
                                    },
                                  }}
                                  error={!!errors.district_id}
                                  helperText={errors.district_id?.message}
                                  size="small"
                                />
                              )}
                            />
                          )}
                        />
                        <Controller
                          name="village_id"
                          control={control}
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Autocomplete
                              sx={{ width: 200 }}
                              options={village_id}
                              autoHighlight
                              getOptionLabel={(option) => `${option.value}`}
                              onChange={(e, value) => {
                                setVillageID(value._id);
                              }}
                              renderOption={(props, option) => {
                                const { key, ...optionProps } = props;
          
                                return (
                                  <Box
                                    key={option._id}
                                    component="li"
                                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                                    {...optionProps}
                                  >
                                    {option.value}
                                  </Box>
                                );
                              }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  {...register("village_id")}
                                  label="Choose a village_id"
                                  slotProps={{
                                    htmlInput: {
                                      ...params.inputProps,
                                      autoComplete: "new-password", // disable autocomplete and autofill
                                    },
                                  }}
                                  error={!!errors.village_id}
                                  helperText={errors.village_id?.message}
                                  size="small"
                                />
                              )}
                            />
                          )}
                        />
                          <Controller
            name="enterprise_id"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                id="outlined-basic"
                label="enterprise_id"
                type="text"
                {...register("enterprise_id")}
                error={!!errors.status}
                helperText={errors.status?.message}
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
            name="license_no"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                id="outlined-basic"
                label="license_no"
                type="text"
                {...register("license_no")}
                error={!!errors.status}
                helperText={errors.status?.message}
                variant="outlined"
                size="small"
              />
            )}
          />
            <Controller
            name="branches"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                id="outlined-basic"
                label="branches"
                type="text"
                {...register("branches")}
                error={!!errors.status}
                helperText={errors.status?.message}
                variant="outlined"
                size="small"
              />
            )}
          />

       <Controller
            name="service_units"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                id="outlined-basic"
                label="service_units"
                type="text"
                {...register("service_units")}
                error={!!errors.status}
                helperText={errors.status?.message}
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
            name="employees"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                id="outlined-basic"
                label="employees"
                type="text"
                {...register("employees")}
                error={!!errors.status}
                helperText={errors.status?.message}
                variant="outlined"
                size="small"
              />
            )}
          />
            <Controller
            name="employees_female"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                id="outlined-basic"
                label="employees_female"
                type="text"
                {...register("employees_female")}
                error={!!errors.status}
                helperText={errors.status?.message}
                variant="outlined"
                size="small"
              />
            )}
          />

       <Controller
            name="employees_HQ"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                id="outlined-basic"
                label="employees_HQ"
                type="text"
                {...register("employees_HQ")}
                error={!!errors.status}
                helperText={errors.status?.message}
                variant="outlined"
                size="small"
              />
            )}
          />
    <Controller
            name="employees_female_HQ"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                id="outlined-basic"
                label="employees_female_HQ"
                type="text"
                {...register("employees_female_HQ")}
                error={!!errors.status}
                helperText={errors.status?.message}
                variant="outlined"
                size="small"
              />
            )}
          />
    <Controller
            name="tel"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                id="outlined-basic"
                label="tel"
                type="text"
                {...register("tel")}
                error={!!errors.status}
                helperText={errors.status?.message}
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
<Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          "& > :not(style)": { width: "20ch" },
                        }}
                      >

   <Controller
            name="mobile"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                id="outlined-basic"
                label="mobile"
                type="text"
                {...register("mobile")}
                error={!!errors.status}
                helperText={errors.status?.message}
                variant="outlined"
                size="small"
              />
            )}
          />
    <Controller
            name="fax"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                id="outlined-basic"
                label="fax"
                type="text"
                {...register("fax")}
                error={!!errors.status}
                helperText={errors.status?.message}
                variant="outlined"
                size="small"
              />
            )}
          />
    <Controller
            name="email"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                id="outlined-basic"
                label="email"
                type="text"
                {...register("email")}
                error={!!errors.status}
                helperText={errors.status?.message}
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
            name="whatsapp"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                id="outlined-basic"
                label="whatsapp"
                type="text"
                {...register("whatsapp")}
                error={!!errors.website}
                helperText={errors.website?.message}
                variant="outlined"
                size="small"
              />
            )}
          />
           <Controller
            name="website"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                id="outlined-basic"
                label="website"
                type='text'
                {...register("website")}
                error={!!errors.other_infos}
                helperText={errors.other_infos?.message}
                variant="outlined"
                size="small"
              />
            )}
          />
           <Controller
            name="other_infos"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                id="outlined-basic"
                label="other_infos"
                type="text"
                {...register("other_infos")}
                error={!!errors.other_infos}
                helperText={errors.other_infos?.message}
                variant="outlined"
                size="small"
              />
            )}
          />
           <Controller
            name="latitude"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                id="outlined-basic"
                label="latitude"
                type="text"
                {...register("latitude")}
                error={!!errors.latitude}
                helperText={errors.latitude?.message}
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
            name="longitude"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                id="outlined-basic"
                label="longitude"
                type="text"
                {...register("longitude")}
                error={!!errors.longitude}
                helperText={errors.longitude?.message}
                variant="outlined"
                size="small"
              />
            )}
          />
          

                        </Box>
<br/>
<br/>
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
