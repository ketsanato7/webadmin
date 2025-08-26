import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Autocomplete, Box, Button, Stack, TextField } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";

import FormWrapperProps from "../../../component/FormInsert";
import axios from "../../../api/apiMonday";
import { get_data } from "../../../api/loan/DataSet/D19.loan_purposes";
import  {get_loan_classifications} from "../../../api/loan/DataSet/D11.loan_classifications";
import  {get_loan_categories} from "../../../api/loan/DataSet/D10.loan_categories";
import  {get_customer_types} from "../../../api/loan/DataSet/D3.customer_types";
import  {get_economic_sectors} from "../../../api/loan/DataSet/D6.economic_sectors";
import  {get_economic_branches} from "../../../api/loan/DataSet/D5.economic_branches";
import  {get_borrower_connections} from "../../../api/loan/DataSet/D13.borrower_connections";
import  {get_loan_funding_sources} from "../../../api/loan/DataSet/D12.loan_funding_sources";

import { schema } from "../../../schems/loan/2.lao_id_cards";
import { Clear, Save } from "@mui/icons-material";
import css from "../../../style.module.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function DraggableDialog({ porps }) {
  const [UserOfLoan, setUseOfLoan] = React.useState("");
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
                />
              )}
            />
            <Controller
              name="from_date"
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
                    {...register("from_date")}
                    label="from_date"
                    onChange={(value) => {
                      setDateOfIssue(value);
                    }}
                  />
                </LocalizationProvider>
              )}
            />
            <Controller
              name="to_date"
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
                    {...register("to_date")}
                    label="to_date"
                    onChange={(value) => {
                      setExpDate(value);
                    }}
                  />
                </LocalizationProvider>
              )}
            />
            <Controller
              name="use_of_loan"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Autocomplete
                  sx={{ width: 150 }}
                  options={get_data().data}
                  autoHighlight
                  getOptionLabel={(option) => `${option.value_LA}`}
                  onChange={(event, value) => {
                    setUseOfLoan(value._id);
                  }}
                  renderOption={(props, option) => {
                    const { key, ...optionProps } = props;

                    return (
                      <Box
                        key={key}
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...optionProps}
                      >
                        {option.value_LA}
                      </Box>
                    );
                  }}
                  renderInput={(params, option) => {
                    return (
                      <TextField
                        {...params}
                        {...register("use_of_loan")}
                        label="Choose a use_of_loan"
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          },
                        }}
                        error={!!errors.category_id}
                        helperText={errors.category_id?.message}
                        size="small"
                      />
                    );
                  }}
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
              name="approved_balance"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  id="outlined-basic"
                  label="approved_balance"
                  type="text"
                  {...register("approved_balance")}
                  error={!!errors.approved_balance}
                  helperText={errors.approved_balance?.message}
                  variant="outlined"
                  size="small"
                />
              )}
            />

            <Controller
              name="remaining_balance"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  id="outlined-basic"
                  label="remaining_balance"
                  type="text"
                  {...register("remaining_balance")}
                  error={!!errors.remaining_balance}
                  helperText={errors.remaining_balance?.message}
                  variant="outlined"
                  size="small"
                />
              )}
            />
            <Controller
              name="allowance_losses"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  id="outlined-basic"
                  label="allowance_losses"
                  type="text"
                  {...register("allowance_losses")}
                  error={!!errors.allowance_losses}
                  helperText={errors.allowance_losses?.message}
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
              name="interest_rate"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  id="outlined-basic"
                  label="interest_rate"
                  type="text"
                  {...register("interest_rate")}
                  error={!!errors.interest_rate}
                  helperText={errors.interest_rate?.message}
                  variant="outlined"
                  size="small"
                />
              )}
            />

      <Controller
              name="loan_classifications"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Autocomplete
                  sx={{ width: 150 }}
                  options={get_loan_classifications().data}
                  autoHighlight
                  getOptionLabel={(option) => `${option.value_LA}`}
                  onChange={(event, value) => {
                    setUseOfLoan(value._id);
                  }}
                  renderOption={(props, option) => {
                    const { key, ...optionProps } = props;

                    return (
                      <Box
                        key={key}
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...optionProps}
                      >
                        {option.value_LA}
                      </Box>
                    );
                  }}
                  renderInput={(params, option) => {
                    return (
                      <TextField
                        {...params}
                        {...register("loan_classifications")}
                        label="Choose a loan_classifications"
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          },
                        }}
                        error={!!errors.loan_classifications}
                        helperText={errors.loan_classifications?.message}
                        size="small"
                      />
                    );
                  }}
                />
              )}
            />
               <Controller
              name="classification_date"
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
                    {...register("classification_date")}
                    label="classification_date"
                    onChange={(value) => {
                      setDateOfIssue(value);
                    }}
                  />
                </LocalizationProvider>
              )}
            />

      <Controller
              name="loan_categories_id"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Autocomplete
                  sx={{ width: 150 }}
                  options={get_loan_categories().data}
                  autoHighlight
                  getOptionLabel={(option) => `${option.value_LA}`}
                  onChange={(event, value) => {
                    setUseOfLoan(value._id);
                  }}
                  renderOption={(props, option) => {
                    const { key, ...optionProps } = props;

                    return (
                      <Box
                        key={key}
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...optionProps}
                      >
                        {option.value_LA}
                      </Box>
                    );
                  }}
                  renderInput={(params, option) => {
                    return (
                      <TextField
                        {...params}
                        {...register("loan_categories_id")}
                        label="Choose a loan_categories_id"
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          },
                        }}
                        error={!!errors.loan_categories_id}
                        helperText={errors.loan_categories_id?.message}
                        size="small"
                      />
                    );
                  }}
                />
              )}
            />
                 <Controller
              name="restructured_date"
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
                    {...register("restructured_date")}
                    label="restructured_date"
                    onChange={(value) => {
                      setDateOfIssue(value);
                    }}
                  />
                </LocalizationProvider>
              )}
            />
                     <Controller
              name="write_off_date"
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
                    {...register("write_off_date")}
                    label="write_off_date"
                    onChange={(value) => {
                      setDateOfIssue(value);
                    }}
                  />
                </LocalizationProvider>
              )}
            />
            <Controller
              name="remaining_balance"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  id="outlined-basic"
                  label="remaining_balance"
                  type="text"
                  {...register("remaining_balance")}
                  error={!!errors.remaining_balance}
                  helperText={errors.remaining_balance?.message}
                  variant="outlined"
                  size="small"
                />
              )}
            />
            <Controller
              name="allowance_losses"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  id="outlined-basic"
                  label="allowance_losses"
                  type="text"
                  {...register("allowance_losses")}
                  error={!!errors.allowance_losses}
                  helperText={errors.allowance_losses?.message}
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

              name="borrower_type_id"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Autocomplete
                  sx={{ width: 150 }}
                  options={get_customer_types().data}
                  autoHighlight
                  getOptionLabel={(option) => `${option.value_LA}`}
                  onChange={(event, value) => {
                    setUseOfLoan(value._id);
                  }}
                  renderOption={(props, option) => {
                    const { key, ...optionProps } = props;

                    return (
                      <Box
                        key={key}
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...optionProps}
                      >
                        {option.value_LA}
                      </Box>
                    );
                  }}
                  renderInput={(params, option) => {
                    return (
                      <TextField
                        {...params}
                        {...register("borrower_type_id")}
                        label="Choose a borrower_type_id"
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          },
                        }}
                        error={!!errors.loan_categories_id}
                        helperText={errors.loan_categories_id?.message}
                        size="small"
                      />
                    );
                  }}
                />
              )}
            />
     <Controller

              name="economic_sector_id"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Autocomplete
                  sx={{ width: 150 }}
                  options={get_economic_sectors().data}
                  autoHighlight
                  getOptionLabel={(option) => `${option.value_LA}`}
                  onChange={(event, value) => {
                    setUseOfLoan(value._id);
                  }}
                  renderOption={(props, option) => {
                    const { key, ...optionProps } = props;

                    return (
                      <Box
                        key={key}
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...optionProps}
                      >
                        {option.value_LA}
                      </Box>
                    );
                  }}
                  renderInput={(params, option) => {
                    return (
                      <TextField
                        {...params}
                        {...register("economic_sector_id")}
                        label="Choose a economic_sector_id"
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          },
                        }}
                        error={!!errors.economic_sector_id}
                        helperText={errors.economic_sector_id?.message}
                        size="small"
                      />
                    );
                  }}
                />
              )}
            /> 
            
                <Controller

              name="economic_branch_id"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Autocomplete
                  sx={{ width: 150 }}
                  options={get_economic_branches().data}
                  autoHighlight
                  getOptionLabel={(option) => `${option.value_LA}`}
                  onChange={(event, value) => {
                    setUseOfLoan(value._id);
                  }}
                  renderOption={(props, option) => {
                    const { key, ...optionProps } = props;

                    return (
                      <Box
                        key={key}
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...optionProps}
                      >
                        {option.value_LA}
                      </Box>
                    );
                  }}
                  renderInput={(params, option) => {
                    return (
                      <TextField
                        {...params}
                        {...register("economic_branch_id")}
                        label="Choose a economic_branch_id"
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          },
                        }}
                        error={!!errors.economic_branch_id}
                        helperText={errors.economic_branch_id?.message}
                        size="small"
                      />
                    );
                  }}
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

              name="borrower_connection_id"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Autocomplete
                  sx={{ width: 150 }}
                  options={get_borrower_connections().data}
                  autoHighlight
                  getOptionLabel={(option) => `${option.value_LA}`}
                  onChange={(event, value) => {
                    setUseOfLoan(value._id);
                  }}
                  renderOption={(props, option) => {
                    const { key, ...optionProps } = props;

                    return (
                      <Box
                        key={key}
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...optionProps}
                      >
                        {option.value_LA}
                      </Box>
                    );
                  }}
                  renderInput={(params, option) => {
                    return (
                      <TextField
                        {...params}
                        {...register("borrower_connection_id")}
                        label="Choose a borrower_connection_id"
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          },
                        }}
                        error={!!errors.borrower_connection_id}
                        helperText={errors.borrower_connection_id?.message}
                        size="small"
                      />
                    );
                  }}
                />
              )}
            />
     <Controller

              name="funding_source_id"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Autocomplete
                  sx={{ width: 150 }}
                  options={get_loan_funding_sources().data}
                  autoHighlight
                  getOptionLabel={(option) => `${option.value_LA}`}
                  onChange={(event, value) => {
                    setUseOfLoan(value._id);
                  }}
                  renderOption={(props, option) => {
                    const { key, ...optionProps } = props;

                    return (
                      <Box
                        key={key}
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...optionProps}
                      >
                        {option.value_LA}
                      </Box>
                    );
                  }}
                  renderInput={(params, option) => {
                    return (
                      <TextField
                        {...params}
                        {...register("funding_source_id")}
                        label="Choose a funding_source_id"
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          },
                        }}
                        error={!!errors.funding_source_id}
                        helperText={errors.funding_source_id?.message}
                        size="small"
                      />
                    );
                  }}
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
