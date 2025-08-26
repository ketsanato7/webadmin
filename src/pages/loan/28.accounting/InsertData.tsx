import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Save,
  Cancel,
  Add,
  Clear,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import {
  FormControl,
  Button,
  InputLabel,
  Stack,
  TextField,
  MenuItem,
  Select,
  IconButton,
  FormHelperText} from "@mui/material";
import axios from "../../../api/apiMonday";
import Dailog from '../../../component/dailog';
import schema from '../../../schems/loan/28.accounting';
import css from "../../../style.module.css";

import { ToastContainer, toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function DraggableDialog({ porps }) {
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState();
  const [gender_id, setGender_id] = React.useState([]);
  const [nationality_id, setNationality_id] = React.useState([]);
  const [marital_status_id, setMarital_status_id] = React.useState([]);
  const [career_id, setCareer_id] = React.useState([]);
  const [village_id, setVillage_id] = React.useState([]);

  const form1 = React.useRef();

  const handleClickOpenInsert = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
const result=schema.safeParse(data);

    axios
      .post("/accountings/create", result.data)
      .then((e) => {
        if (e.data.status == true) {
        
          toast.success("ບັນທຶກສຳເລັດ");
          reset();
        } else {
          toast.error("ບໍ້ສາມາດບັນທຶກຂໍ້ມູນໄດ້");
        }
      })
      .catch((err) => toast.error(err));
  };

  React.useEffect(() => {
    axios.get("/genders/read").then((result) => {
      setGender_id(result.data.data);
    });
    axios.get("/nationality/read").then((result) => {
      setNationality_id(result.data.data);

    });
    axios.get("/marital_status/read").then((result) => {
      setMarital_status_id(result.data.data);

    });
    axios.get("/career/read").then((result) => {
      setCareer_id(result.data.data);

    });
    axios.get("/village/read").then((result) => {
      setVillage_id(result.data.data);

    });
  }, []);

  const gender =
    !!data &&
    gender_id.map((item, index) => {
      return {
        ...item,
        id: item._id,

        value: item.value,
      };
    });

  const gender1 = gender.map((index) => (
    <MenuItem key={index._id} value={index._id}>
      {index.value}
    </MenuItem>
  ));
      console.log(gender_id);
      console.log(village_id);
      console.log(career_id);
      console.log(marital_status_id);
  console.log(nationality_id);

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
        <form
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Stack
                        spacing={{ xs: 1, sm: 1, p: 1 }}
                        direction="row"
                        useFlexGap
                        sx={{ flexWrap: "wrap" }}
                      >
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
          <TextField
                id="outlined-basic"
                label="firstname_EN"
                type="text"
                {...register("firstname_EN")}
                error={!!errors.firstname_EN}
                helperText={errors.firstname_EN?.message}
                variant="outlined"
                sx={{ width: "25ch" }}

/>          <TextField
                id="outlined-basic"
                label="lastname_EN"
                type="text"
                {...register("lastname_EN")}
                error={!!errors.lastname_EN}
                helperText={errors.lastname_EN?.message}
                variant="outlined"
                sx={{ width: "25ch" }}

/>
<TextField
                id="outlined-basic"
                label="dateofbirth"
                type="text"
                {...register("dateofbirth")}
                error={!!errors.dateofbirth}
                helperText={errors.dateofbirth?.message}
                variant="outlined"
                sx={{ width: "25ch" }}

/> 
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>

        <DatePicker    {...register("dateofbirth")} 
        
        />
      </DemoContainer>
    </LocalizationProvider>

<FormControl sx={{ width: "25ch" }} variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              District
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="gender_id"
              {...register("gender_id")}
            >
              {gender1}
            </Select>
                            <FormHelperText error id="my-helper-text">
                              {errors.gender_id?.message}
                            </FormHelperText>
            
          </FormControl>
          
<FormControl sx={{ width: "25ch" }} variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              District
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="gender_id"
              {...register("gender_id")}
            >
              {gender1}
            </Select>
                            <FormHelperText error id="my-helper-text">
                              {errors.gender_id?.message}
                            </FormHelperText>
            
          </FormControl>
<FormControl sx={{ width: "25ch" }} variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              District
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="gender_id"
              {...register("gender_id")}
            >
              {gender1}
            </Select>
                            <FormHelperText error id="my-helper-text">
                              {errors.gender_id?.message}
                            </FormHelperText>
            
          </FormControl>
<FormControl sx={{ width: "25ch" }} variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              District
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="gender_id"
              {...register("gender_id")}
            >
              {gender1}
            </Select>
                            <FormHelperText error id="my-helper-text">
                              {errors.gender_id?.message}
                            </FormHelperText>
            
          </FormControl>

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
        </DialogContent>
      </Dialog>
      <ToastContainer />
    </>
  );
}
