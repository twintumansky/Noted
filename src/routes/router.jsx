import { createBrowserRouter} from "react-router-dom";
import LayoutShell from "@/components/layout/LayoutShell";
import Intro from "../pages/Intro";
import Board from "@/components/canvas/Board";
import PageTransition from '../components/animations/PageTransition'
import Error from "../components/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PageTransition ><Intro /></PageTransition>, // The landing page remains clean/no sidebar
        error: <Error />
      },
      {
        path: "/main",
        element: <LayoutShell />, // The Shell provides the Sidebar and Navbar
        children: [
          {
            index: true,
            element: <Board />, // This is where the Canvas lives
          }
        ],
        error: <Error />
      }
]);