import "./index.css";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import App from "./App";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import TvScreen from "./components/TvScreen";
import SignUp from "./components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "tvscreen",
    element: <TvScreen />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
