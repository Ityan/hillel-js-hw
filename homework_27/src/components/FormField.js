import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

import TextField from "@mui/material/TextField";

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

function FormField({ control, label, helper, type = "string", size = "small", required }) {
  return (
    <Controller
        control={control}
        name={camelize(label)}
        rules={required && { required: "The field is required" }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label={label}
            type={type}
            required={required}
            error={!!error}
            helperText={error?.message || helper}
            size={size}
          />
        )}
      />
  );
}

FormField.propTypes = {
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  helper: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.oneOf(["samll", "medium"])
};

export default FormField;