import { useState } from "react";

import { ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import theme from "./themes/theme";

function App() {
  const [isOpen, setOpen] = useState(false);
  const showLoginForm = () => setOpen(true);
  const hideLoginForm = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Header showLoginForm={showLoginForm} />
      <LoginForm isOpen={isOpen} hideLoginForm={hideLoginForm} />
    </ThemeProvider>
  );
}

export default App;
