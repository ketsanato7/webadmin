import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { useForm, useFormContext } from "react-hook-form";
import { formDefaultValues, schema } from "../../../schems/loan/22.mfi_info";

export default function Test() {
        const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset
      } = useForm({ mode: "all", resolver: zodResolver(schema),defaultValues:formDefaultValues }); 

  return (
  <>
                 
  <TextField 
    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("id")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("approved_date")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("name_LA")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("name_EN")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("address")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("house_unit")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("house_no")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("branches")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("service_units")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("employees")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("employees_female")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("employees_HQ")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("employees_female_HQ")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("tel")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("mobile")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("fax")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("email")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("whatsapp")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("website")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...register("other_infos")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
                  <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("latitude")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  
       <TextField
                    id="outlined-basic"
                    label="id"
                    type="text"
                    {...methods.register("longitude")}
                    error={!!errors._id}
                    helperText={errors._id?.message}
                    variant="outlined"
                    sx={{ width: "25ch" }}
                  />
  </>
  
   
  
  )
  ;
}
