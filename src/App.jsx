import { createBrowserRouter, Outlet } from "react-router-dom";
import Intro from "./pages/Intro";
import NotesSection from "./pages/NotesSection";
import PageTransition from "./components/animations/PageTransition";
import Error from "./components/Error";

const RootLayout = () => {

    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-500">
        <Outlet /> 
      </div>
    );
  };

const router = createBrowserRouter([
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

export default router;