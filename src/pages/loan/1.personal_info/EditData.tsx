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
  Grid,
  Typography,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import css from "../../../style.module.css";
import { ToastContainer, toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import Dailog from "../../../component/dailog";
import { schemaDelete, schema } from "../../../schems/loan/1.personal_info";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import Stepper from "../../../component/Stepper1";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
export default function DraggableDialog({ porps }) {
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState();
  const [gender_id, setGender_id] = React.useState([]);
  const [nationality_id, setNationality_id] = React.useState([]);
  const [marital_status_id, setMarital_status_id] = React.useState([]);
  const [career_id, setCareer_id] = React.useState([]);
  const [village_id, setVillage_id] = React.useState([]);
  const [district_id, setDistrict_id] = React.useState([]);
  const [province_id, setProvice_id] = React.useState([]);
  const [id_district, setId_district] = React.useState([]);
  const [id_province, setId_province] = React.useState([]);
  const form1 = React.useRef();
  const [GenderID, setGenderID] = React.useState("");
  const [NationalityID, setNationalityID] = React.useState("");
  const [MaritalStatusID, setMaritalStatusID] = React.useState("");
  const [CareerID, setCareerID] = React.useState("");
  const [VillageID, setVillageID] = React.useState("");
  const [DistrictID, setDistrictID] = React.useState("");
  const [ProvinceID, setProvinceID] = React.useState("");
  const [DateOfBirth, setDateOfBirth] = React.useState("");
  const today = dayjs();
  const yesterday = dayjs().subtract(1, "day");
  const handleClickOpenInsert = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {
    reset,
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    const dataQuery = {
      id: data.id,
      firstname_LA: data.firstname_LA,
      lastname_LA: data.lastname_LA,
      firstname_EN: data.firstname_EN,
      lastname_EN: data.lastname_EN,
      dateofbirth: data.dateofbirth,
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
    };

    const result = schema.safeParse(dataQuery);

    if (!result.success) {
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
      <Button
        variant="outlined"
        sx={{ width: "10ch" }}
        type="submit"
        startIcon={<Add />}
        onClick={handleClickOpenInsert}
      >
        Add
      </Button>

      <Dialog
        maxWidth="sx"
        open={open}
        onClose={handleClose}
        PaperComponent={Dailog}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Insert
        </DialogTitle>
        <IconButton
          aria-label="fingerprint"
          color="error"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <Cancel />
        </IconButton>
        <DialogContent dividers>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              spacing={{ xs: 1, sm: 1, p: 1 }}
              direction="row"
              useFlexGap
              sx={{ flexWrap: "wrap" }}
            >
              <Controller
                name="id"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="number"
                    {...register("id")}
                    error={!!errors.id}
                    helperText={errors.id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
                )}
              />
              <Controller
                name="firstname_LA"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    id="outlined-basic"
                    label="firstname_LA"
                    type="text"
                    {...register("firstname_LA")}
                    error={!!errors.firstname_LA}
                    helperText={errors.firstname_LA?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
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
                    sx={{ width: "25ch" }}
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
                    sx={{ width: "25ch" }}
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
                    sx={{ width: "25ch" }}
                  />
                )}
              />
              <Controller
                name="dateofbirth"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      defaultValue={yesterday}
                      disablePast
                      views={["year", "month", "day"]}
                      slotProps={{
                        textField: {
                          helperText: "DD/MM/YYYY",
                        },
                      }}
                      
                      {...register("dateofbirth")}
                      label="Basic date picker"
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
                    sx={{ width: "25ch" }}
                  />
                )}
              />
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
                    sx={{ width: "25ch" }}
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
                    sx={{ width: "25ch" }}
                  />
                )}
              />{" "}
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
                    sx={{ width: "25ch" }}
                  />
                )}
              />
              <Controller
                name="nationality_id"
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Autocomplete
                    sx={{ width: 300 }}
                    options={nationality_id}
                    autoHighlight
                    getOptionLabel={(option) => `${option.value_LA} `}
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
                      />
                    )}
                  />
                )}
              />
              <Controller
                name="marital_status_id"
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Autocomplete
                    sx={{ width: 300 }}
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
                      />
                    )}
                  />
                )}
              />
              <Controller
                name="career_id"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Autocomplete
                    sx={{ width: 300 }}
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
                      />
                    )}
                  />
                )}
              />
              <Controller
                name="province_id"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Autocomplete
                    sx={{ width: 300 }}
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
                    sx={{ width: 300 }}
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
                    sx={{ width: 300 }}
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
                      />
                    )}
                  />
                )}
              />
              <Controller
                name="gender_id"
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Autocomplete
                    sx={{ width: 300 }}
                    options={gender_id}
                    onChange={(e, value) => {
                      setGenderID(value._id);
                    }}
                    autoHighlight
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
                        label="Choose a gender_id"
                        {...register("gender_id")}
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          },
                        }}
                      />
                    )}
                  />
                )}
              />
            </Stack>
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
          <ToastContainer />
        </DialogContent>
      </Dialog>
    </>
  );
}
