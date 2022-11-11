import { useState } from "react";

import LoginFormContext from "./LoginFormContext";

const LoginFormProvider = ({ children }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const openLoginForm = () => {
    setShowLoginForm(true);
  };

  const closeLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <LoginFormContext.Provider value={{ showLoginForm, openLoginForm, closeLoginForm }}>
      {children}
    </LoginFormContext.Provider>
  );
};

export default LoginFormProvider;