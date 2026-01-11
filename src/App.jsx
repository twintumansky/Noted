import { createBrowserRouter } from "react-router-dom";
import Intro from "./pages/Intro";
import NotesSection from "./pages/NotesSection";
import PageTransition from "./components/animations/PageTransition";
import Error from "./components/Error";

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