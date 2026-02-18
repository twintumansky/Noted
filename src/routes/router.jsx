import { createBrowserRouter} from "react-router-dom";
import LayoutShell from "@/components/layout/LayoutShell";
import Intro from "../pages/Intro";
import Board from "@/components/canvas/Board";
import PageTransition from '../components/animations/PageTransition'
import Error from "../components/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PageTransition ><Intro /></PageTransition>,
        error: <Error />
      },
      {
        path: "/main",
        element: <LayoutShell />,
        children: [
          {
            index: true,
            element: <Board />,
          }
        ],
        error: <Error />
      }
]);