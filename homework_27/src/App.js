import { ThemeProvider } from "@mui/material/styles";

import PasangerForm from "./components/PasangerForm";
import formTheme from "./themes/formTheme";

function App() {
  return (
    <ThemeProvider theme={formTheme}>
      <PasangerForm />
    </ThemeProvider>
  );
}

export default App;
