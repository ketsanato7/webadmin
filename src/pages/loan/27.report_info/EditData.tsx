import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, Button, Stack, TextField } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";

import FormWrapperProps from "../../../component/FormInsert";
import axios from "../../../api/apiMonday";

import { schema } from "../../../schems/loan/2.lao_id_cards";
import { Clear, Save } from "@mui/icons-material";
import css from "../../../style.module.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function DraggableDialog({ porps }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const today = dayjs();
  const yesterday = dayjs().subtract(1, "day");

  const onSubmit = (data) => {
    console.log("insety");

    const result = schema.safeParse(data);

    if (!result.success) {
    } else {
      axios
        .post("/lao_id_cards/create", result.data)
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
console.log(porps)
  return (
    <>
      <FormWrapperProps title={"lao_id_card"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { width: "20ch" },
            }}
          >
              <Controller
              name="_id"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  id="outlined-basic"
                  label="_id"
                  type="text"
                  {...register("_id")}
                  error={!!errors._id}
                  helperText={errors._id?.message}
                  variant="outlined"
                                    defaultValue={porps._id}

                  size="small"
                />
              )}
            />
            <Controller
              name="owner_id"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  id="outlined-basic"
                  label="owner_id"
                  type="text"
                  {...register("owner_id")}
                  error={!!errors.owner_id}
                  helperText={errors.owner_id?.message}
                  defaultValue={porps.owner_id}
                  variant="outlined"
                  size="small"
                />
              )}
            />
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
                  size="small"
                  defaultValue={porps.id}
                />
              )}
            />

            <Controller
              name="card_no"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  id="outlined-basic"
                  label="card_no"
                  type="text"
                  {...register("card_no")}
                  error={!!errors.card_no}
                  helperText={errors.card_no?.message}
                  defaultValue={porps.card_no}
                  variant="outlined"
                  size="small"
                />
              )}
            />
            <Controller
              name="card_name"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  id="outlined-basic"
                  label="card_name"
                  type="text"
                  {...register("card_name")}
                  error={!!errors.card_name}
                  helperText={errors.card_name?.message}
                  defaultValue={porps.card_name}
                  variant="outlined"
                  size="small"
                />
              )}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { width: "20ch" },
            }}
          >
            <Controller
              name="date_of_issue"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    defaultValue={yesterday}
                    sx={{ width: 150, height: 50 }}
                    views={["year", "month", "day"]}
                    slotProps={{
                      textField: {
                        helperText: "DD/MM/YYYY",
                      },
                    }}
                    {...register("date_of_issue")}
                    label="date_of_issue"
                    onChange={(value) => {
                      setDateOfIssue(value);
                    }}
                  />
                </LocalizationProvider>
              )}
            />
            <Controller
              name="exp_date"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    defaultValue={yesterday}
                    sx={{ width: 150, height: 50 }}
                    views={["year", "month", "day"]}
                    slotProps={{
                      textField: {
                        helperText: "DD/MM/YYYY",
                      },
                    }}
                    {...register("exp_date")}
                    label="exp_date"
                    onChange={(value) => {
                      setExpDate(value);
                    }}
                  />
                </LocalizationProvider>
              )}
            />
            <Controller
              name="status"
              control={control}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <TextField
                  id="outlined-basic"
                  label="status"
                  type="text"
                  {...register("status")}
                  error={!!errors.status}
                  helperText={errors.status?.message}
                  variant="outlined"
                  size="small"
                  defaultValue={porps.status}
                />
              )}
            />
          </Box>
          <br />
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
      </FormWrapperProps>
    </>
  );
}
