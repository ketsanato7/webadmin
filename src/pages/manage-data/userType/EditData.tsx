import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import Contorll from "./Contorler";
import {
  Save,
  Cancel,
  Edit,
  Visibility,
  VisibilityOff,
  Clear,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import axios, {
  EmailRegExp,
  PhoneRegExp,
  PasswordRegExp,
} from "../../../api/apiMonday";
import {
  FormControl,
  Button,
  InputLabel,
  Stack,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  Grid,
  OutlinedInput,
  IconButton,
  FormHelperText,
  useFormControl,
} from "@mui/material";
import css from "../../../style.module.css";
import { ToastContainer, toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
export default function DraggableDialog({ porps }) {
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const form1 = React.useRef();
  const [CheckUserTypeName, setCheckUserTypename] = React.useState();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const handleClickOpenInsert = () => {
    setOpen(true);
    setStatus("Insert");
  };

  const handleClose = () => {
    setOpen(false);
  };

  type FormValues = {
    _id: String;
    user_type_name: String;
  };
  const form = useForm({
    defaultValues: {
      _id: porps._id,
      UserTypeName: porps.user_type_name,
    },
  });
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = form;

  const onSubmit = (data: FormValues) => {
    const dataSend = {
      _id:data._id,
      user_type_name: data.UserTypeName
    };



    checkData(data.user_type_name);

    axios
      .post("/user-type/update", dataSend)
      .then((result) => {
        if (result.data.status == true) {
          toast.success("ບັນທຶກສຳເລັດ");
          reset();
          handleClose();
        } else {
          toast.error("ບໍ້ສາມາດບັນທຶກຂໍ້ມູນໄດ້");
        }
      })
      .catch((err) => toast.error(err));
  };

  const checkData = async (e) => {
    const user_type_name = {
      user_type_name: e,
    };

    await axios
      .post("/user-type/checkUserType", user_type_name)
      .then((result) => {
        setCheckUserTypename(result.data.status);
      });
      if(porps.Tel == e){
        setCheckUserTypename(false)
      }
  };

  return (
    <>
      <IconButton
        aria-label="fingerprint"
        color="error"
        onClick={handleClickOpenInsert}
      >
        <Edit />
      </IconButton>

      <Dialog
        maxWidth="sx"
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Edit
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
            ref={form1}
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
                name="_id"
                disabled
              />
              <TextField
                id="outlined-basic"
                label="UserTypeName"
                type="text"
                {...register("UserTypeName", {
                  required: {
                    value: true,
                    message: "ກະລຸນາປ້ອນຂໍ້ມູນ",
                  },
                  validate: (value) =>
                    CheckUserTypeName == false || "ອີເມວນີ້ມີຄົນໃຊ້ສະໝັກແລ້ວ",
                })}
                error={!!errors.UserTypeName}
                helperText={errors.UserTypeName?.message}
                variant="outlined"
                sx={{ width: "25ch" }}
                name="UserTypeName"
                onBlur={(e) => checkData(e.target.value)}
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
        <ToastContainer />
      </Dialog>
    </>
  );
}
export function PaperComponent(props) {
  const nodeRef = React.useRef(null);
  return (
    <Draggable
      nodeRef={nodeRef}
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} ref={nodeRef} />
    </Draggable>
  );
}
