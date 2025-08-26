import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import {
  Cancel,Delete,
  Clear,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import axios from "../../../api/apiMonday";
import {
  FormControl,
  Button,
  InputLabel,
  Stack,
  TextField,
  MenuItem,
  Select,
  IconButton,
  FormHelperText,
} from "@mui/material";
import css from "../../../style.module.css";
import { ToastContainer, toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import Dailog from '../../../component/dailog';
import schems from "../../../schems/loan/3.lao_family_books";

export default function DraggableDialog({ porps }) {
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState("");

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
    reset,getValues,
  } = useForm({
    resolver: zodResolver(schema),defaultValues: {
      VillageCode: porps.VillageCode,
      VillageName: porps.VillageName,
      DistrictID: porps.DistrictID,
      _id: porps._id,
    },
  });

  const onSubmit = (data: FormValues) => {
const result=schema.safeParse(data);
    axios
      .post("/Village/delete", result.data)
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
    axios.get("/District/read").then((result) => {
      setData(result.data.data);
    });
  }, []);

  const UserTypeData =
    !!data &&
    data.map((item, index) => {
      return {
        ...item,
        id: item._id,
        DistrictName: item.DistrictName,
      };
    });

  const myList = UserTypeData.map((index) => (
    <MenuItem key={index._id} value={index._id}>
      {index.DistrictName}
    </MenuItem>
  ));
  return (
    <>
             <IconButton aria-label="fingerprint" color="error" onClick={handleClickOpenInsert}>
            <Delete />
          </IconButton>

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
                label="_id"
                type="text"
                {...register("_id")}
                error={!!errors._id}
                helperText={errors._id?.message}
                variant="outlined"
                sx={{ width: "25ch" }}

/>
          <TextField
                id="outlined-basic"
                label="Village Code"
                type="text"
                {...register("VillageCode")}
                error={!!errors.VillageCode}
                helperText={errors.VillageCode?.message}
                variant="outlined"
                sx={{ width: "25ch" }}

/>
<TextField
                id="outlined-basic"
                label="VillageName"
                type="text"
                {...register("VillageName")}
                error={!!errors.VillageName}
                helperText={errors.VillageName?.message}
                variant="outlined"
                sx={{ width: "25ch" }}

/>
<FormControl sx={{ width: "25ch" }} variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              District
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="District"
              {...register("DistrictID")}
              value={getValues("DistrictID")}
            >
              {myList}  
            </Select>
                                              <FormHelperText error id="my-helper-text">
                                                {errors.DistrictID?.message}
                                              </FormHelperText>
                  
          </FormControl>
          
``
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
                          sx={{ width: "25ch" }}
                          type="submit"
                          startIcon={<Delete />}
                        >
                          Delete
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
         <ToastContainer />

      </Dialog>
    </>
  );
}
