import { useState } from "react";

const isEmpty = (str) => str.trim().length == 0;

const isValidEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const RegistrationForm = () => {
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = ({ target: { value, name } }) => {
    setError("");
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEmpty(form.email)) {
      setError("Email is empty");
      return;
    }
    if (!isValidEmail(form.email)) {
      setError("Invalid Email");
      return;
    }
    if (isEmpty(form.password)) {
      setError("Password is empty");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Password doesn't match");
      return;
    }
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="form" noValidate>
      <label htmlFor="email">Email</label>
      <input type="email" value={form.email} name="email" onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input type="password" value={form.password} name="password" onChange={handleChange} />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" value={form.confirmPassword} name="confirmPassword" onChange={handleChange} />
      <button type="submit" className="submit-btn">Register</button>
      {!isEmpty(error) && <p value={error} className="error-msg">{error}</p>}
    </form>
  );
};

export default RegistrationForm;