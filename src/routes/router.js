import { createBrowserRouter} from "react-router-dom";
import RootLayout from "../App";
import Intro from "./pages/Intro";
import NotesSection from "./pages/NotesSection";
import PageTransition from "./components/animations/PageTransition";
import Error from "./components/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: (
                    <PageTransition >
                        <Intro />
                    </PageTransition>
                ),
            },
            {
                path: 'main',
                element: (
                    <PageTransition>
                        <NotesSection />
                    </PageTransition>
                ),
                children: [
                    { path: "starred", element: <NotesSection /> },
                    { path: "deleted", element: <NotesSection /> },
                  ],
            },
        ],
    },
]);