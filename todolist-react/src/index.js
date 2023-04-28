import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Detail } from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
