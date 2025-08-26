import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Save, Cancel, Add, Clear } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import axios from "../../../api/apiMonday";
import {
  Button,
  InputLabel,
  Stack,
  TextField,
  MenuItem,
  Select,
  IconButton,
  FormHelperText,
  Box,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import css from "../../../style.module.css";
import { ToastContainer, toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { get_data } from "../../../api/loan/DataSet/D20.document_types";
import { z } from "zod";
import {  schema } from "../../../schems/loan/1.personal_info";


export default function DraggableDialog({ porps }) {
  const [gender_id, setGender_id] = React.useState([]);
  const [nationality_id, setNationality_id] = React.useState([]);
  const [marital_status_id, setMarital_status_id] = React.useState([]);
  const [career_id, setCareer_id] = React.useState([]);
  const [village_id, setVillage_id] = React.useState([]);
  const [district_id, setDistrict_id] = React.useState([]);
  const [province_id, setProvice_id] = React.useState([]);
  const [id_district, setId_district] = React.useState([]);
  const [id_province, setId_province] = React.useState([]);
  const [GenderID, setGenderID] = React.useState();
  const [NationalityID, setNationalityID] = React.useState("");
  const [MaritalStatusID, setMaritalStatusID] = React.useState("");
  const [CareerID, setCareerID] = React.useState("");
  const [VillageID, setVillageID] = React.useState("");
  const [DistrictID, setDistrictID] = React.useState("");
  const [ProvinceID, setProvinceID] = React.useState("");
  const [DateOfBirth, setDateOfBirth] = React.useState("");
  const today = dayjs();
  const yesterday = dayjs().subtract(1, "day");
  const exp_date = dayjs(today).add(5, "year");
  const [DateExpiry, setDateExpiry] = React.useState("");
  const [DateIssue, setDateIssue] = React.useState("");
  const [DocumentTypeID, setDocumentTypeID] = React.useState("");
  const [MarriedCoupleDateOfBirth, setMarriedCoupleDateOfBirth] =
    React.useState("");
  const [MarriedCoupleCareerID, setMarriedCoupleCareerID] = React.useState("");
  const {
    reset,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema)
  });
  const document_types = get_data().data;

  const Insert = (data) => {
 
      const dataQuery = {
        id: data.id,
        firstname_LA: data.firstname_LA,
        lastname_LA: data.lastname_LA,
        firstname_EN: data.firstname_EN,
        lastname_EN: data.lastname_EN,
        dateofbirth: dayjs(DateOfBirth).format("DD-MM-YYYY"),
        age: data.age,
        gender_id: GenderID,
        nationality_id: NationalityID,
        marital_status_id: MaritalStatusID,
        career_id: CareerID,
        province_id: ProvinceID,
        district_id: DistrictID,
        village_id: VillageID,
        home_address: data.home_address,
        contact_info: data.contact_info,
        status: data.status,
        document_type_id: DocumentTypeID,
        document_id: data.document_id,
        document_no: data.document_no,
        document_name: data.document_name,
        issued_by:dayjs(DateIssue).format("DD-MM-YYYY"),
        exp_date: dayjs(DateExpiry).format("DD-MM-YYYY"),
        work_place: data.work_place,
        work_place_tel: data.work_place_tel,
        married_couple_id: data.married_couple_id,
        married_couple_firstname_LA: data.married_couple_firstname_LA,
        married_couple_lastname_LA: data.married_couple_lastname_LA,
        married_couple_tel: data.married_couple_work_place_tel,
        married_couple_dateofbirth: dayjs(MarriedCoupleDateOfBirth).format("DD-MM-YYYY"),
        married_couple_career_id: MarriedCoupleCareerID,
        married_couple_work_place: data.married_couple_work_place,
        married_couple_work_place_tel: data.married_couple_work_place_tel,
      };


      const result = schema.safeParse(dataQuery);

console.log(data)
console.log(dataQuery)

    if (!result.success) {
      console.log(result);
    } else {
      axios
        .post("/personal_info/create", result.data)
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
    axios.get("/genders/read").then((result) => {
      setGender_id(result.data.data);
    });
    axios.get("/nationality/read").then((result) => {
      setNationality_id(result.data.data);
    });
    axios.get("/marital_statuses/read").then((result) => {
      setMarital_status_id(result.data.data);
    });
    axios.get("/careers/read").then((result) => {
      setCareer_id(result.data.data);
    });

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
      <form onSubmit={handleSubmit(Insert)}>
        <Stack
          spacing={{ xs: 1, sm: 1, p: 1 }}
          direction="row"
          useFlexGap
          sx={{ flexWrap: "wrap" }}
          className={css.ContorllerTexBox}
        >
          <fieldset>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1, width: "20ch" },
              }}
            >
       

              <Controller
                name="id"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    
                    label="id"
                    error={!!error}
                    helperText={error?.message}

                    
                  />
                )}
              />
              <Controller
                name="firstname_LA"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
  
                    label="firstname_LA"
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
              <Controller
                name="lastname_LA"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    id="outlined-basic"
                    label="lastname_LA"
                    type="text"
                    {...register("lastname_LA")}
                    error={!!errors.lastname_LA}
                    helperText={errors.lastname_LA?.message}
                    variant="outlined"
                    size="small"
                  />
                )}
              />
              <Controller
                name="firstname_EN"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    id="outlined-basic"
                    label="firstname_EN"
                    type="text"
                    {...register("firstname_EN")}
                    error={!!errors.firstname_EN}
                    helperText={errors.firstname_EN?.message}
                    variant="outlined"
                    size="small"
                  />
                )}
              />
              <Controller
                name="lastname_EN"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    id="outlined-basic"
                    label="lastname_EN"
                    type="text"
                    {...register("lastname_EN")}
                    error={!!errors.lastname_EN}
                    helperText={errors.lastname_EN?.message}
                    variant="outlined"
                    size="small"
                  />
                )}
              />
              <Controller
                name="gender_id"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Autocomplete
                    options={gender_id}
                    getOptionLabel={(o) => o.value_LA}
                    value={gender_id.find((g) => g._id === field.value) || null}
                    onChange={(e, v) => {
                      setGenderID(v._id);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Gender"
                        error={!!error}
                        helperText={error?.message}
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
                "& > :not(style)": { m: 1, width: "20ch" },
              }}
            >
        <Controller
                name="dateofbirth"
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
                      {...register("dateofbirth")}
                      label="dateofbirth"
                      onChange={(value) => {
                        setDateOfBirth(value);
                      }}
                    />
                  </LocalizationProvider>
                )}
              />
              <Controller
                name="age"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    id="outlined-basic"
                    label="age"
                    type="text"
                    {...register("age")}
                    error={!!errors.age}
                    helperText={errors.age?.message}
                    variant="outlined"
                    size="small"
                  />
                )}
              />
              <Controller
                name="nationality_id"
                control={control}
                render={({
                  field: { onChange, onBlur, value, ref },
                  fieldState: {},
                }) => (
                  <Autocomplete
                    sx={{ width: 150 }}
                    options={nationality_id}
                    autoHighlight
                    getOptionLabel={(option) => `${option.value_LA}`}
                    onChange={(e, value) => {
                      setNationalityID(value._id);
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
                          {option.value_LA}
                        </Box>
                      );
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        {...register("nationality_id")}
                        label="Choose a nationality_id"
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          },
                        }}
                        error={!!errors.nationality_id}
                        helperText={errors.nationality_id?.message}
                        size="small"
                      />
                    )}
                  />
                )}
              />
              <Controller
                name="province_id"
                sx={{ width: 200 }}
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
                sx={{ width: 200 }}
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
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1, width: "20ch" },
              }}
            >
              <Controller
                name="home_address"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    id="outlined-basic"
                    label="home_address"
                    type="text"
                    {...register("home_address")}
                    error={!!errors.home_address}
                    helperText={errors.home_address?.message}
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
                name="status"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
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
          </fieldset>
        </Stack>

        <Stack
          spacing={{ xs: 1, sm: 1, p: 1 }}
          direction="row"
          useFlexGap
          sx={{ flexWrap: "wrap" }}
          className={css.ContorllerTexBox}
        >
          <fieldset>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1, width: "20ch" },
              }}
            >
              <Controller
                name="document_type_id"
                control={control}
                render={({ field: { onChange } }) => (
                  <Autocomplete
                    sx={{ width: 150 }}
                    options={document_types}
                    autoHighlight
                    getOptionLabel={(option) => `${option.value_LA}`}
                    onChange={(e, value) => {
                      setDocumentTypeID(value._id);
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
                          {option.value_LA}
                        </Box>
                      );
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        {...register("document_type_id")}
                        label="Choose a document_type"
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          },
                        }}
                        size="small"
                        error={!!errors.document_type_id}
                        helperText={errors.document_type_id?.message}
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
                "& > :not(style)": { m: 1, width: "20ch" },
              }}
            >
              <Controller
                name="document_id"
                rules={{
                  required: true,
                }}
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    id="outlined-basic"
                    label="document_id"
                    type="text"
                    {...register("document_id")}
                    error={!!errors.document_id}
                    helperText={errors.document_id?.message}
                    variant="outlined"
                    size="small"
                  />
                )}
              />

              <Controller
                name="document_no"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    id="outlined-basic"
                    label="document_no"
                    type="text"
                    {...register("document_no")}
                    error={!!errors.document_no}
                    helperText={errors.document_no?.message}
                    variant="outlined"
                    size="small"
                  />
                )}
              />
              <Controller
                name="document_name"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    id="outlined-basic"
                    label="name"
                    type="text"
                    {...register("document_name")}
                    error={!!errors.document_name}
                    helperText={errors.document_name?.message}
                    variant="outlined"
                    size="small"
                  />
                )}
              />
              <Controller
                name="issued_by"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      defaultValue={yesterday}
                      disablePast
                      sx={{ width: 150, height: 50 }}
                      views={["year", "month", "day"]}
                      slotProps={{
                        textField: {
                          helperText: "DD/MM/YYYY",
                        },
                      }}
                      {...register("issued_by")}
                      label="issued_by"
                      onChange={(value) => {
                        setDateIssue(value);
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
                      sx={{ width: 150, height: 50 }}
                      defaultValue={today}
                      disablePast
                      views={["year", "month", "day"]}
                      slotProps={{
                        textField: {
                          helperText: "DD/MM/YYYY",
                        },
                      }}
                      {...register("exp_date")}
                      label="exp_date"
                      onChange={(value) => {
                        setDateExpiry(value);
                      }}
                    />
                  </LocalizationProvider>
                )}
              />
            </Box>
          </fieldset>
        </Stack>

        <Stack
          spacing={{ xs: 1, sm: 1, p: 1 }}
          direction="row"
          useFlexGap
          sx={{ flexWrap: "wrap" }}
          className={css.ContorllerTexBox}
        >
          <fieldset>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1, width: "20ch" },
              }}
            >
              <Controller
                name="career_id"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Autocomplete
                    sx={{ width: 150 }}
                    options={career_id}
                    autoHighlight
                    onChange={(e, value) => {
                      setCareerID(value._id);
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
                        {...register("career_id")}
                        label="Choose a career_id"
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          },
                        }}
                        error={!!errors.career_id}
                        helperText={errors.career_id?.message}
                        size="small"
                      />
                    )}
                  />
                )}
              />
              <Controller
                name="work_place"
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <TextField
                    id="outlined-basic"
                    label="work_place"
                    type="text"
                    {...register("work_place")}
                    error={!!errors.work_place}
                    helperText={errors.work_place?.message}
                    variant="outlined"
                    size="small"
                  />
                )}
              />
              <Controller
                name="work_place_tel"
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <TextField
                    id="outlined-basic"
                    label="work_place_tel"
                    type="text"
                    {...register("work_place_tel")}
                    error={!!errors.work_place_tel}
                    helperText={errors.work_place_tel?.message}
                    variant="outlined"
                    size="small"
                  />
                )}
              />
            </Box>
          </fieldset>
        </Stack>
        <Stack
          spacing={{ xs: 1, sm: 1, p: 1 }}
          direction="row"
          useFlexGap
          sx={{ flexWrap: "wrap" }}
          className={css.ContorllerTexBox}
        >
          <fieldset>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1, width: "20ch" },
              }}
            >
              <Controller
                name="marital_status_id"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Autocomplete
                    sx={{ width: 150 }}
                    options={marital_status_id}
                    autoHighlight
                    onChange={(e, value) => {
                      setMaritalStatusID(value._id);
                    }}
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
                        {...register("marital_status_id")}
                        label="Choose a marital_status_id"
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          },
                        }}
                        error={!!errors.marital_status_id}
                        helperText={errors.marital_status_id?.message}
                        size="small"
                      />
                    )}
                  />
                )}
              />
              <Controller
                name="married_couple_id"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    id="outlined-basic"
                    label="married_couple_id"
                    type="text"
                    {...register("married_couple_id")}
                    error={!!errors.married_couple_id}
                    helperText={errors.married_couple_id?.message}
                    variant="outlined"
                    size="small"
                  />
                )}
              />
              <Controller
                name="married_couple_firstname_LA"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    id="outlined-basic"
                    label="married_couple_firstname_LA"
                    type="text"
                    {...register("married_couple_firstname_LA")}
                    error={!!errors.married_couple_firstname_LA}
                    helperText={errors.married_couple_firstname_LA?.message}
                    variant="outlined"
                    size="small"
                  />
                )}
              />
              <Controller
                name="married_couple_lastname_LA"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    id="outlined-basic"
                    label="married_couple_lastname_LA"
                    type="text"
                    {...register("married_couple_lastname_LA")}
                    error={!!errors.married_couple_lastname_LA}
                    helperText={errors.married_couple_lastname_LA?.message}
                    variant="outlined"
                    size="small"
                  />
                )}
              />
              <Controller
                name="married_couple_dateofbirth"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{ width: 150 }}
                      defaultValue={today}
                      disablePast
                      views={["year", "month", "day"]}
                      slotProps={{
                        textField: {
                          helperText: "DD/MM/YYYY",
                        },
                      }}
                      {...register("married_couple_dateofbirth")}
                      label="married_couple_dateofbirth"
                      onChange={(value) => {
                        setMarriedCoupleDateOfBirth(value);
                      }}
                    />
                  </LocalizationProvider>
                )}
              />{" "}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1, width: "20ch" },
              }}
            >
              <Controller
                name="married_couple_career_id"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Autocomplete
                    sx={{ width: 150 }}
                    options={career_id}
                    autoHighlight
                    onChange={(e, value) => {
                      setMarriedCoupleCareerID(value._id);
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
                        {...register("married_couple_career_id")}
                        label="Choose a career_id"
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          },
                        }}
                        error={!!errors.married_couple_career_id}
                        helperText={errors.married_couple_career_id?.message}
                        size="small"
                      />
                    )}
                  />
                )}
              />
              <Controller
                name="married_couple_work_place_tel"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    id="outlined-basic"
                    label="tel"
                    type="text"
                    {...register("married_couple_work_place_tel")}
                    error={!!errors.married_couple_work_place_tel}
                    helperText={errors.married_couple_work_place_tel?.message}
                    variant="outlined"
                    size="small"
                  />
                )}
              />
              <Controller
                name="married_couple_work_place"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    id="outlined-basic"
                    label="work_place"
                    type="text"
                    {...register("married_couple_work_place")}
                    error={!!errors.married_couple_work_place}
                    helperText={errors.married_couple_work_place?.message}
                    variant="outlined"
                    size="small"
                  />
                )}
              />
            </Box>
          </fieldset>
        </Stack>

        <Stack
          spacing={{ xs: 1, sm: 1, p: 1 }}
          direction="row"
          useFlexGap
          sx={{ flexWrap: "wrap", justifyContent: "center" }}
          className={css.ContorllerTexBox}
        >
          <Button
            variant="contained"
            type="submit"
            startIcon={<Save />}
            onClick={Insert}
          >
            Insert
          </Button>
          <Button variant="contained" startIcon={<Clear />} type="reset">
            Clear
          </Button>
        </Stack>
      </form>
      <ToastContainer />
    </>
  );
}
