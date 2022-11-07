import { ThemeProvider } from "@mui/material/styles";

import PasangerForm from "./components/PasangerForm";
import theme from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PasangerForm />
    </ThemeProvider>
  );
}

export default App;
