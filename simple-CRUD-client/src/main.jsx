/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Users } from "./components/Users.jsx";
import Update from "./components/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <Users />,
    loader: async () => {
      const res = await fetch("http://localhost:5000/users");
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      return res.json();
    },
  },
  {
    path: "/update/:id",
    element: <Update />,
    loader: async ({ params }) => {
      const res = await fetch(`http://localhost:5000/users/${params.id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch user for update");
      }
      return res.json();
    },
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
