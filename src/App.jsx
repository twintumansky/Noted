// import { Outlet } from "react-router-dom";

// export default function RootLayout() {
//     return (
//         <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-500">
//             <Outlet />
//         </div>
//     );
// }

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Board from "./components/canvas/Board"
import { useState } from "react";

function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return(
        <div className="h-screen w-screen flex overflow-hidden bg-[#f4f4f2] text-slate-900">
            <aside className={
                `${isSidebarOpen? 'w-64' : 'w-0'}
                 transition-all duration-300 ease-in-out
                 border-r border-slate-200 bg-white overflow-y-auto   
                `}>
                    <Sidebar />
            </aside>

            <main className="flex flex-col relative overflow-hidden">
                <header className="h-14 border-b border-slate-200 bg-white/80 backdrop-blur-md z-10">
                    <Navbar />
                </header>
                <section className="flex-1 relative">
                    <Board />
                </section>
            </main>
        </div>
    );
};

export default App;






