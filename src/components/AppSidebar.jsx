import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
  } from "@/components/ui/sidebar"
  import { HugeiconsIcon } from "@hugeicons/react"
  import { Folder01Icon, Note01Icon } from "@hugeicons/core-free-icons"
  
  const data = [
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
    return (
      <Sidebar variant="floating" collapsible="icon">
        <SidebarHeader className="border-b h-14 flex items-center px-4">
          <span className="font-bold text-xl tracking-tight">NOTED</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Your Board</SidebarGroupLabel>
            <SidebarMenu>
              {data.map((item) => (
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