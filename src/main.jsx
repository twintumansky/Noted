import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeProvider from "./components/context/ThemeContext";
import PageTransition from "./components/PageTransition";
import NotesSection from "./components/NotesSection";
import Error from "./components/Error";
//import Intro from "./components/Intro";

const router = createBrowserRouter([
  {
    path: "/",
    //element: <Intro />,
    element: <PageTransition />,
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

