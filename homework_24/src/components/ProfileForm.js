import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstname: yup.string().trim().required("First Name is required!").min(3, "Min length is 3"),
  lastname: yup.string().trim().required("Last Name is required!").min(3, "Min length is 3"),
  country: yup.string().test(
    "select_check",
    "Country is required!",
    country => country !== "empty"
  )
});

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form" noValidate>
      <label htmlFor="firstname">First Name</label>
      <input type="text" name="firstname" {...register("firstname")} />
      <label htmlFor="lastname">Last Name</label>
      <input type="text" name="lastname" {...register("lastname")} />
      <label htmlFor="country">Country</label>
      <select {...register("country")}>
        <option value="empty"></option>
        <option value="ua">Ukraine</option>
        <option value="pl">Poland</option>
        <option value="usa">USA</option>
      </select>
      <button type="submit" className="submit-btn">Save</button>
      {errors.firstname && (
        <div className="error-msg">{errors.firstname.message}</div>
      )}
      {errors.lastname && (
        <div className="error-msg">{errors.lastname.message}</div>
      )}
      {errors.country && (
        <div className="error-msg">{errors.country.message}</div>
      )}
    </form>
  );
};

export default ProfileForm;