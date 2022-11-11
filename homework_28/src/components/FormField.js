import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

import TextField from "@mui/material/TextField";

function FormField({ control, label, type = "text", name, required }) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: required && "The field is required" }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
}

FormField.propTypes = {
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  helper: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool
};

export default FormField;