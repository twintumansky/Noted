import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
// import TopNavbar from "@/components/TopNavbar"
import Board from "@/components/canvas/Board"
import { TooltipProvider } from "../ui/tooltip"

export default function LayoutShell() {
  return (
    <TooltipProvider delayDuration={0}>
      <SidebarProvider>
        <AppSidebar />
          {/* <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-white px-4 z-10">
          </header> */}
          <main className="flex-1 relative bg-[#f4f4f2]">
            <SidebarTrigger />
            <Board />
          </main>
      </SidebarProvider>
    </TooltipProvider>
  )
}