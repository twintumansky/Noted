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
  import { Folder01Icon, Note01Icon, Notebook02Icon } from "@hugeicons/core-free-icons"
  
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
    return (
      <Sidebar variant="floating" collapsible="icon">
        <SidebarHeader className="border-b h-14 flex items-center justify-center px-4">
          <div className="gap-2 flex item-center justify-center">
            <HugeiconsIcon icon={Notebook02Icon} />
            <span className="font-mediumtext-xl tracking-tight pl-4">Noted</span>
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