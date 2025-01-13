import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeProvider from "./components/context/ThemeContext";
import Intro from "./components/Intro";
import NotesSection from "./components/NotesSection";
import Error from "./components/Error";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
    errorElement: <Error />,
  },
  {
    path: "/main/*",
    element: <NotesSection />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
