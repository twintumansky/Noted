import { createBrowserRouter } from "react-router-dom";
import LayoutShell from "@/components/layout/LayoutShell";
import Intro from "../pages/Intro";
import Error from "../components/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
    errorElement: <Error />
  },
  {
    path: "/main",
    element: <LayoutShell />,
    errorElement: <Error />
  }
]);