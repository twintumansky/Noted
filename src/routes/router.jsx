import { createBrowserRouter} from "react-router-dom";
import LayoutShell from "@/components/layout/LayoutShell";
// import Intro from "../pages/Intro";
// import Board from "@/components/canvas/Board";
// import PageTransition from '../components/animations/PageTransition'
import Error from "../components/Error";

export const router = createBrowserRouter([
      {
        path: "/",
        element: <LayoutShell />,
        error: <Error />
      }
]);