import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar" 
// import TopNavbar from "@/components/TopNavbar"
import Board from "@/components/canvas/Board"

export default function LayoutShell() {
  return (
    <SidebarProvider>
      <AppSidebar /> 

      <SidebarInset className="flex flex-col h-screen overflow-hidden">
        
        <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-white px-4 z-10">
          {/* <TopNavbar /> */}
        </header>

        <main className="flex-1 relative bg-[#f4f4f2]">
           <Board />
        </main>
        
      </SidebarInset>
    </SidebarProvider>
  )
}