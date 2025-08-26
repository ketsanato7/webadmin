import {
  Controller,
  useForm,
  Path,
  useFormContext,
  Control,
  FieldValues,
} from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, TextField } from "@mui/material";

interface RHFAutocompleteFieldProps<
  o extends { id: string; label: string },
  TField extends FieldValues,
> {
  control: Control<TField>;
  name: Path<TField>;
  options: o[];
}

const RHFAutocomplete = <
  o extends { id: string; label: string },
  TField extends FieldValues,
>(
  props: RHFAutocompleteFieldProps<o, TField>
) => {
  const { control, options, name } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field, fieldState: { error } }) => {
        const { onChang, value, ref } = field;
        return (
          <Autocomplete
            autoHighlight
            value={value ? options.find((options)=>{
              return value===options.id;
            }) ?? null :null
            }

            onChange={(event:any,newValue) => {
              onChange(newValue ? newValue.id : null);
            }}
            getOptionLabel={(options) =>
{
  return option.label;
}
            }

            
            isOptionEqualToValue={(options, newValue) =>
              options.id === newValue.id
            }
          
            renderInput={(params) => (
              <TextField
                {...params}
                inputRef={ref}
                error={!!error}
                helperText={error?.message}
                label={options.label}
                slotProps={{
                  htmlInput: {
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  },
                }}
              />
            )}
          />
        );
      }}
    />
  );
};
export default RHFAutocomplete;
