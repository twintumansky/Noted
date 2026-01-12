import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-500">
            <Outlet />
        </div>
    );
}






