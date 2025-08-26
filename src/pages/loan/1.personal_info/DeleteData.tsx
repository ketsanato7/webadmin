import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { Cancel, Delete, Clear } from "@mui/icons-material";
import { Controller, useForm } from "react-hook-form";
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
import Dailog from "../../../component/dailog";
import { schema } from "../../../schems/loan/1.personal_info";

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
    reset,control,
    getValues,
  } = useForm({
    resolver: zodResolver(schema),
  });

 const onSubmit = (data) => {
    const result = schema.safeParse(data);
    console.log(result)

    if (!result.success) {
    } else {
      axios
        .post("/personal_info/delete", result.data)
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
      <IconButton
        aria-label="fingerprint"
        color="error"
        onClick={handleClickOpenInsert}
      >
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
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Stack
              spacing={{ xs: 1, sm: 1, p: 1 }}
              direction="row"
              useFlexGap
              sx={{ flexWrap: "wrap" }}
            >
             <Controller
                  name="id"
                  control={control}
                  rules={{ required: true }}
                  defaultValue={porps.id}
                  render={({ field }) => (
                    <TextField
                      id="id"
                      label="id"
                      type="text"
                      error={!!errors.id}
                      helperText={errors.id?.message}
                      variant="outlined"
                      sx={{ width: "25ch" }}
                      {...field}
                    />
                  )}
                />
       
         
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
