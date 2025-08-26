import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Save, Cancel, Delete, Clear } from "@mui/icons-material";
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
import {schemaDelete} from "../../../../schems/loan/D/D3.customer_types";
import css from "../../../../style.module.css";

import { ToastContainer, toast } from "react-toastify";
    import { zodResolver } from '@hookform/resolvers/zod';


export default function DraggableDialog({ porps }) {
  const [data, setData] = React.useState({});
  const [open, setOpen] = React.useState(false);
 const form1 = React.useRef();

  const handleClickOpenInsert = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const { register,control, handleSubmit, formState: { errors } } = useForm({
      resolver: zodResolver(schemaDelete), 
    });

  const onSubmit = (data) => {
    
const result=schemaDelete.safeParse(data)
console.log(result)

if(!result.success){


}else{

 axios
      .post("/customer_types/delete", result.data)
      .then((result) => {
                if (result.data.status == true) {
          toast.success("ລຶບຂໍ້ມູນສຳເລັດ");
          reset();
        } else {
          toast.error("ລຶບຂໍ້ມູນບໍ່ສຳເລັດ");
        }
      })
      .catch((err) => toast.error(err));
  };


}



  return (
    <>
        <IconButton aria-label="fingerprint" color='error' onClick={handleClickOpenInsert}>
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
           onSubmit={handleSubmit(onSubmit)}>
            <Stack
              spacing={{ xs: 1, sm: 1, p: 1 }}
              direction="row"
              useFlexGap
              sx={{ flexWrap: "wrap" }}
            >
     <Controller
                name="_id"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    defaultValue={porps._id}
                    {...register("_id")}
                    error={!!errors.id}
                    helperText={errors._id?.message}
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
