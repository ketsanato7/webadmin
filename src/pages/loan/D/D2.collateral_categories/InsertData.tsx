import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Save, Cancel, Add, Clear } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
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
import axios from "../../../../api/apiMonday";
import Dailog from "../../../../component/dailog";
import {schema} from "../../../../schems/loan/D/D2.collateral_categories";
import css from "../../../../style.module.css";

import { ToastContainer, toast } from "react-toastify";
import { zodResolver } from '@hookform/resolvers/zod';


export default function DraggableDialog({ porps }) {
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const form1 = React.useRef();

  const handleClickOpenInsert = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const { register,control, handleSubmit, formState: { errors },reset } = useForm({
      resolver: zodResolver(schema), 
    });

  const onSubmit = (data) => {
const result=schema.safeParse(data)

if(!result.success){


}else{

 axios
      .post("/collateral_categories/create", result.data)
      .then((result) => {
                if (result.data.status == true) {
          toast.success("ບັນທຶກສຳເລັດ");
          reset();
        } else {
          toast.error("ບໍ້ສາມາດບັນທຶກຂໍ້ມູນໄດ້");
        }
      })
      .catch((err) => toast.error(err));
  };


}



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
           onSubmit={handleSubmit(onSubmit)}>
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
                        type="text"
                        
                        {...register("id")}
                        error={!!errors.id}
                        helperText={errors.id?.message}
                        variant="outlined"
                        sx={{ width: "25ch" }}


    />    
  )}
      />

     <Controller
        name="value_LA"
        control={control}
  render={({ field: { onChange, onBlur, value } }) => (
      <TextField
    id="outlined-basic"
                        label="value_LA"
                        type="text"
                        
                        {...register("value_LA")}
                        error={!!errors.value_LA}
                        helperText={errors.value_LA?.message}
                        variant="outlined"
                        sx={{ width: "25ch" }}


    />    
  )}
      />
        <Controller
        name="value_EN"
        control={control}
  render={({ field: { onChange, onBlur, value } }) => (
      <TextField
    id="outlined-basic"
                        label="value_EN"
                        type="text"
                        
                        {...register("value_EN")}
                        error={!!errors.value_EN}
                        helperText={errors.value_EN?.message}
                        variant="outlined"
                        sx={{ width: "25ch" }}


    />    
  )}
      />
        <Controller
        name="code_LA"
        control={control}
  render={({ field: { onChange, onBlur, value } }) => (
      <TextField
    id="outlined-basic"
                        label="code_LA"
                        type="text"
                        
                        {...register("code_LA")}
                        error={!!errors.code_LA}
                        helperText={errors.code_LA?.message}
                        variant="outlined"
                        sx={{ width: "25ch" }}


    />    
  )}
      />
        <Controller
        name="code_EN"
        control={control}
  render={({ field: { onChange, onBlur, value } }) => (
      <TextField
    id="outlined-basic"
                        label="code_EN"
                        type="text"
                        
                        {...register("code_EN")}
                        error={!!errors.code_EN}
                        helperText={errors.code_EN?.message}
                        variant="outlined"
                        sx={{ width: "25ch" }}


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
        </DialogContent>
      </Dialog>
      <ToastContainer />
    </>
  );
}
