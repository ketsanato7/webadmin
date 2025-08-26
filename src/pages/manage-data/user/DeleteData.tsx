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
  Add,
  Visibility,
  VisibilityOff,
  Clear,Edit,Delete
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

export default function DraggableDialog({ porps }) {
  const [data, setData] = React.useState([]);
  const [showPassword, setShowPassword] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [UserType, setUserType] = React.useState();
  const [Password1, setPassword1] = React.useState("");
  const [Password2, setPassword2] = React.useState("");
  const [CheckUsername, setCheckUsername] = React.useState();
  const [CheckTel, setCheckTel] = React.useState();
  const [resData, setResData] = React.useState();
  const form1 = React.useRef();
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
    
    Username: String;
    Password: String;
    ConfirmPassword: String;

    Tel: String;
    UserTypeID: String;
  };
  const form = useForm({
    defaultValues: {
      _id:porps._id,
      Username: porps.username,
      Password: "",
      ConfirmPassword: "",
      Tel: porps.Tel,
      UserTypeID: porps.user_type_id,
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
      _id:data._id

    };

    axios
      .post("/users1/delete", dataSend)
      .then((result) => {
        console.log(result);
        setResData(result.data);

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


  React.useEffect(() => {
    axios.get("/user-type/read").then((result) => {
      setData(result.data.data);
    });
  }, []);

  const UserTypeData =
    !!data &&
    data.map((item, index) => {
      return {
        ...item,
        id: item._id,
        user_type_name: item.user_type_name,
      };
    });

  const myList = UserTypeData.map((index) => (
    <MenuItem key={index._id} value={index._id}>
      {index.user_type_name}
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
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
Delete 
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
                              {...register("_id", {
                                required: {
                                  value: true,
                                  message: "ກະລຸນາປ້ອນຂໍ້ມູນ",
                                },
                              })}
                              error={!!errors._id}
                              helperText={errors._id?.message}
                              variant="outlined"
                              sx={{ width: "25ch" }}
                              name="_id"
              disabled
                            />
              <TextField
              disabled
                id="outlined-basic"
                label="Username"
                type="email"
                {...register("Username")}
                error={!!errors.Username}
                helperText={errors.Username?.message}
                variant="outlined"
                sx={{ width: "25ch" }}
                name="Username"
              />

              <TextField
              disabled
                id="outlined-basic"
                label="Tel"
                type="tel"
                {...register("Tel")}

                aria-invalid={errors.Tel ? "true" : "false"}
                error={!!errors.Tel}
                helperText={errors.Tel?.message}
                variant="outlined"
                sx={{ width: "25ch" }}
              />


              <FormControl sx={{ width: "25ch" }}>
                <InputLabel id="demo-simple-select-label">UserType</InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={UserType}
                  label="UserType"
                  {...register("UserTypeID", {
                    required: {
                      value: true,
                      message: "ກະລຸນາປ້ອນຂໍ້ມູນ",
                    },
                  })}
                  error={!!errors.UserTypeID}
                  disabled
                >
                  {myList}
                </Select>
                <FormHelperText error id="my-helper-text">
                  {errors.UserTypeID?.message}
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
                Delete 
              </Button>
              <Button
                variant="contained"
                sx={{ width: "25ch" }}
                startIcon={<Clear />}
              onClick={handleClose}
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
