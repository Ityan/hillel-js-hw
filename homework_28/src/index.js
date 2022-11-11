import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import AuthProvider from "./contexts/auth/AuthProvider";
import LoginFormProvider from "./contexts/form/LoginFormProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <LoginFormProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </LoginFormProvider>
  </StrictMode>
);