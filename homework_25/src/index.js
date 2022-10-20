import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import Home from "./components/Home";
import Users from "./routes/Users";
import User from "./routes/User";
import NotFound from "./routes/NotFound";

import "./assets/css/normalize.css";
import "./assets/css/style.css";

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
        path: "/users",
        element: <Users />
      },
      {
        path: "/users/:userId",
        element: <User />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
