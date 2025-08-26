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

export default function DraggableDialog({ porps }) {
  const [data, setData] = React.useState([]);
  const [showPassword, setShowPassword] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [UserType, setUserType] = React.useState();
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
    Username: String;
    Password: String;
    ConfirmPassword: String;

    Tel: String;
    UserTypeID: String;
  };

  const form = useForm({
    mode: "",
    defaultValues: {
      Username: "",
      Password: "",
      ConfirmPassword: "",
      Tel: "",
      UserTypeID: "",
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
      Username: data.Username,
      Password: data.Password,
      Tel: data.Tel,
      user_type_id: data.UserTypeID,
    };

    axios
      .post("/users1/create", dataSend)
      .then((result) => {
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

  const checkUser = async (e) => {
    const username = {
      Username: e,
    };

    await axios.post("/users1/checkUsername", username).then((result) => {
      setCheckUsername(result.data.status);
    });

  };

  const checkTel = async (e) => {
    const tel = {
      Tel: e,
    };
   await axios.post("/users1/checkTel", tel).then((result) => {
      setCheckTel(result.data.status);

    });
  };

  React.useEffect(() => {
    axios.get("/user-type/read").then((result) => {
      setData(result.data.data);
    });
  }, []);

  const UserTypeData = !!data && data.map((item, index) => {
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
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {status}
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
                label="Username"
                type="email"
                {...register("Username", {
                  required: {
                    value: true,
                    message: "ກະລຸນາປ້ອນຂໍ້ມູນ",
                  },
                  pattern: {
                    value:EmailRegExp,
                    message: "invalid email address",
                  },
                  validate: (value) =>
                    CheckUsername == false || "ອີເມວນີ້ມີຄົນໃຊ້ສະໝັກແລ້ວ",
                })}
                error={!!errors.Username}
                helperText={errors.Username?.message}
                variant="outlined"
                sx={{ width: "25ch" }}
                name="Username"
                onBlur={(e) => checkUser(e.target.value)}

              />

              <TextField
                id="outlined-basic"
                label="Tel"
                type="tel"
                {...register("Tel", {
                  required: {
                    value: true,
                    message: "ກະລຸນາປ້ອນຂໍ້ມູນ",
                  },
                  pattern: {
                    value: PhoneRegExp,
                    message: "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖືກຕ້ອງ",
                  },
                  minLength: {
                    value: 13,
                    message:
                      "ກະລຸນາປ້ອນເບີໂທໃຫ້ຄົບ 13 ໂຕ. ຕາມຮູບແບບນີ້ +85620XXXXXXXXX.",
                  },

                  validate: (value) =>
                    CheckTel == false || "ເບີນີ້ມິຄົນໃຊ້ສະໝັກແລ້ວ",
                })}
                error={!!errors.Tel}
                helperText={errors.Tel?.message}
                variant="outlined"
                sx={{ width: "25ch" }}
                onBlur={(e) => checkTel(e.target.value)}
              />
              <FormControl sx={{ width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  {...register("Password", {
                    required: {
                      value: true,
                      message: "ກະລຸນາປ້ອນຂໍ້ມູນ",
                    },
                    pattern: {
                      value: PasswordRegExp,
                      message: "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖືກຕ້ອງ",
                    },
                  })}
                  error={!!errors.Password}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                <FormHelperText error id="my-helper-text">
                  {errors.Password?.message}
                </FormHelperText>
              </FormControl>
              <FormControl sx={{ width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  {...register("ConfirmPassword", {
                    required: {
                      value: true,
                      message:
                        "ກະລຸນາປ້ອນຂໍ້ມູນລະຫັດຜ່ານເພື່ອຢືນຢັນອິກເທື່ອໜື້ງ",
                    },
                    validate: (value) =>
                      value == getValues("Password") || "ລະຫັດຜ່ານບໍ່ຕົງກັນ",
                  })}
                  error={!!errors.ConfirmPassword}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Comfirm Password"
                />
                <FormHelperText error id="my-helper-text">
                  {errors.ConfirmPassword?.message}
                </FormHelperText>
              </FormControl>

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
        </DialogContent>      <ToastContainer />

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
