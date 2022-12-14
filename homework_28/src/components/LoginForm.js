import { useContext } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";
import Grid from '@mui/material/Grid';

import FormField from "./FormField";

import AuthContext from "../contexts/auth/AuthContext";

const LoginForm = ({ isOpen, hideLoginForm }) => {
  const { loginUser } = useContext(AuthContext);

  const { handleSubmit, control } = useForm();

  const handleClick = (creds) => {
    loginUser(creds);
    hideLoginForm();
  }

  return (
    <Dialog onClose={hideLoginForm} open={isOpen}>
      <form onSubmit={handleSubmit(handleClick)} noValidate>
        <Grid container spacing={0} rowSpacing={5}>
          <Grid item xs={11}>
            <DialogTitle>
              Log in for Tripma
            </DialogTitle>
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={hideLoginForm}>
              <Close />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <FormField control={control} label="Username" name="username" required />
          </Grid>
          <Grid item xs={12}>
            <FormField control={control} label="Password" name="password" type="password" required />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" size="large">Log in</Button>
          </Grid>
        </Grid>
      </form>
    </Dialog>
  )
};

LoginForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  hideLoginForm: PropTypes.func.isRequired,
};

export default LoginForm;