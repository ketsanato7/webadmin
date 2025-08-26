import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
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
} from "../../../../api/apiMonday";
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
import css from "../../../../style.module.css";
import { ToastContainer, toast } from "react-toastify";
import Dailog from '../../../../component/dailog'

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
    ProviceCode: String;
    ProviceName: String;
    CountryID: String;

  };

  const form = useForm({
    defaultValues: {
      ProviceCode: "",
      ProviceName: "",
      CountryID: ""
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
      ProviceCode: data.ProviceCode,
      ProviceName: data.ProviceName,
      CountryID: data.CountryID,
    };

    axios
      .post("/Provice/create", dataSend)
      .then((result) => {
        setResData(result.data);

        if (result.data.status == true) {
          
          toast.success("ບັນທຶກສຳເລັດ");
          reset();
        } else {
          toast.error("ບໍ້ສາມາດບັນທຶກຂໍ້ມູນໄດ້");
        }
      })
      .catch((err) => toast.error(err));
  };

  React.useEffect(() => {
    axios.get("/Country/read").then((result) => {
      setData(result.data.data);
    });
  }, []);

  const UserTypeData =
    !!data &&
    data.map((item, index) => {
      return {
        ...item,
        id: item._id,
        CountryName: item.CountryName,
      };
    });
  const myList = UserTypeData.map((index) => (
    <MenuItem key={index._id} value={index._id}>
      {index.CountryName}
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
        PaperComponent={Dailog}
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
                label="ProviceCode"
                type="text"
                {...register("ProviceCode", {
                  required: {
                    value: true,
                    message: "ກະລຸນາປ້ອນຂໍ້ມູນ",
                  },
                  pattern: {
                    value: EmailRegExp,
                    message: "invalid email address",
                  },
                
                })}
                error={!!errors.ProviceCode}
                helperText={errors.ProviceCode?.message}
                variant="outlined"
                sx={{ width: "25ch" }}
                name="ProviceCode"
              />

              <TextField
                id="outlined-basic"
                label="ProviceName"
                type="text"
                {...register("ProviceName", {
                  required: {
                    value: true,
                    message: "ກະລຸນາປ້ອນຂໍ້ມູນ",
                  },
                  pattern: {
                    value: PhoneRegExp,
                    message: "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖືກຕ້ອງ",
                  },
                })}
                error={!!errors.ProviceName}
                helperText={errors.ProviceName?.message}
                variant="outlined"
                sx={{ width: "25ch" }}
              />
              <FormControl sx={{ width: "25ch" }}>
                <InputLabel id="demo-simple-select-label">CountryID</InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="CountryID"
                  {...register("CountryID", {
                    required: {
                      value: true,
                      message: "ກະລຸນາປ້ອນຂໍ້ມູນ",
                    },
                  })}
                  error={!!errors.CountryID}
                >
                  {myList}
                </Select>
                <FormHelperText error id="my-helper-text">
                  {errors.CountryID?.message}
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
