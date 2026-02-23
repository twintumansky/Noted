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
        <SidebarInset className="flex flex-col h-screen overflow-hidden peer-data-[variant=floating]:rounded-none peer-data-[variant=floating]:m-0 peer-data-[variant=floating]:border-none">
          <header className="flex h-8 shrink-0 items-center gap-2 border-b bg-white px-4 z-10">
            <SidebarTrigger>
            </SidebarTrigger>
          </header>
          <main className="flex-1 relative bg-[#dbdcd5]">
            <Board />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}