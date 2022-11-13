import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";

import AuthProvider from "./contexts/auth/AuthProvider";

import Root from "./routes/Root";
import Home from "./routes/Home";
import FLights from "./routes/FLights";
import Hotels from "./routes/Hotels";
import NotFound from "./routes/NotFound";
import theme from "./themes/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/flights",
        element: <FLights />
      },
      {
        path: "/hotels",
        element: <Hotels />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </AuthProvider>
);
