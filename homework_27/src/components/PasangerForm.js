import { useForm } from "react-hook-form";

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import FormField from "./FormField";
import Wrapper from "./Wrapper";

function PasangerForm() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Wrapper>
      <Typography variant="h2">
        Passenger information
      </Typography>
      <Typography variant="body1">
        Enter the required information for each traveler and be sure that it exactly matches the government-issued ID presented at the airport.
      </Typography>
      <Typography variant="h3">
        Passenger 1 (Adult)
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <FormField control={control} label="First Name" name="firstName" required />
          </Grid>
          <Grid item xs={4}>
            <FormField control={control} label="Middle" name="middleName" />
          </Grid>
          <Grid item xs={4}>
            <FormField control={control} label="Last Name" name="lastName" required />
          </Grid>
          <Grid item xs={4}>
            <FormField control={control} label="Suffix" name="suffixName" />
          </Grid>
          <Grid item xs={6}>
            <FormField control={control} label="Date of Birth" size="medium" helper="MM/DD/YY" type="date" name="dob" required />
          </Grid>
          <Grid item xs={6}>
            <FormField control={control} label="Email address" size="medium" name="email" required />
          </Grid>
          <Grid item xs={6}>
            <FormField control={control} label="Phone number" size="medium" type="tel" name="phone" required />
          </Grid>
          <Grid item xs={6}>
            <FormField control={control} label="Redress number" size="medium" name="redressNumber" />
          </Grid>
          <Grid item xs={6}>
            <FormField control={control} label="Known traveller number" size="medium" name="trevellerNumber" required />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" size="large">Submit</Button>
      </form>
    </Wrapper>
  );
}

export default PasangerForm;