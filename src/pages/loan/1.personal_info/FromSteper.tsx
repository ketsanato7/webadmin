import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import {
  Save,
  Cancel,
  Add,
  Clear,
  KeyboardArrowRight,
  KeyboardArrowLeft,
} from "@mui/icons-material";
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
  MobileStepper,
  Paper,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import Dailog from "../../../component/dailog";
import Form from './Insert'
import Form2 from './Insert2'

const steps = [
  {
    label: "1.personal_info",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    contaner: (
      <>
       <Form/>
       
      </>
    ),
  },
  {
    label: "2.lao_id_cards",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
          contaner: (
      <>
       
      </>
    ),

  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function DraggableDialog({ porps }) {
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpenInsert = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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


        
    

            <Stack
  spacing={{ xs: 1, sm: 2 }}
  direction="row"
  useFlexGap
  sx={{ flexWrap: 'wrap' }}
>
        

              <Typography>{steps[activeStep].label}</Typography>










              {steps[activeStep].description}
              {steps[activeStep].contaner}



     


</Stack>

          <ToastContainer />
        </DialogContent>
       <MobileStepper
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
      </Dialog>
    </>
  );
}
