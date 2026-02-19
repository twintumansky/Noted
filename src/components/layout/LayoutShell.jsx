import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
// import TopNavbar from "@/components/TopNavbar"
import Board from "@/components/canvas/Board"
import { TooltipProvider } from "../ui/tooltip"

export default function LayoutShell() {
  
  return (
    <TooltipProvider delayDuration={0}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex flex-col h-screen overflow-hidden">
          <header className="flex h-14 shrink-0 items-center gap-2 bg-[#f4f4f2] z-10">
            <SidebarTrigger>
            </SidebarTrigger>
          </header>

          <main className="flex-1 relative bg-[#f4f4f2]">
            <Board />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}