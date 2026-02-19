import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    useSidebar
  } from "@/components/ui/sidebar"
  import { HugeiconsIcon } from "@hugeicons/react"
  import { Folder01Icon, Note01Icon, Notebook02Icon} from "@hugeicons/core-free-icons"
  
  const dummy_data = [
    {
      id: "1",
      title: "Project Alpha",
      type: "folder",
      children: [
        { id: "2", title: "Meeting Notes", type: "note" },
        { id: "3", title: "Research PDF", type: "note" },
      ],
    },
  ]
  
  export function AppSidebar() {

    const { state } = useSidebar();
    return (
      <Sidebar variant="floating" collapsible="icon">
        {/* <SidebarHeader className="border-b h-14 flex items-center justify-center px-4">
          <div className="gap-2 p-2 flex justify-center items-center">
            <HugeiconsIcon icon={Notebook02Icon} />
            <div className="flex flex-col gap-0.5 leading-none group-data-[collapsible=icon]:hidden">
              <span className="font-medium text-xl tracking-tight">Noted</span>
            </div>
          </div>        
        </SidebarHeader> */}
        <SidebarHeader className="flex tems-center justify-center gap-1">        
          <div className="flex aspect-square items-center justify-center">
            <HugeiconsIcon icon={Notebook02Icon} size={24}/>
          </div>
          <div className={`flex items-center leading-none ${state === "collapsed" ? "hidden" : "block"}`}>
            <span className="font-medium text-x1 tracking-tight">Noted</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Your Board</SidebarGroupLabel>
            <SidebarMenu>
              {dummy_data.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.type === 'folder' ? <HugeiconsIcon icon={Folder01Icon} /> : <HugeiconsIcon icon={Note01Icon} />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }