import { useContext } from "react";

import { ThemeProvider } from "@mui/material/styles";

import LoginFormContext from "./contexts/form/LoginFormContext";

import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import theme from "./themes/theme";

function App() {
  const { showLoginForm } = useContext(LoginFormContext);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {showLoginForm && <LoginForm />}
    </ThemeProvider>
  );
}

export default App;
