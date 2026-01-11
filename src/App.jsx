import { createBrowserRouter, Outlet } from "react-router-dom";
import Intro from "./pages/Intro";
import NotesSection from "./pages/NotesSection";
import PageTransition from "./components/animations/PageTransition";
import Error from "./components/Error";

const RootLayout = () => {
    // This wrapper stays mounted during transitions
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
        <Outlet /> {/* This is where Intro or NotesSection will render */}
      </div>
    );
  };

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <PageTransition>
                <Intro />
            </PageTransition>
        ),
        errorElement: <Error />,
    },
    {
        path: '/main',
        element: (
            <PageTransition>
                <NotesSection />
            </PageTransition>
        ),
        errorElement: <Error />,
    },
]);

export default router;