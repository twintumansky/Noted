import { toRichText } from 'tldraw';
import { useCanvas } from "@/context/CanvasContext";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar
} from "@/components/ui/sidebar";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, Folder01Icon, Note01Icon, Notebook02Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

const dummy_data = [
  {
    id: "1",
    title: "My stuff",
    type: "folder",
    children: [
      { id: "2", title: "Meeting Notes", type: "note" },
      { id: "3", title: "Research PDF", type: "note" },
    ],
  },
  {
    id: "4",
    title: "Collectibles",
    type: "folder",
    children: [
      { id: "5", title: "Design", type: "note" },
      { id: "6", title: "Dev", type: "note" },
    ],
  },
]

export function AppSidebar() {

  const { state } = useSidebar();
  const { editor } = useCanvas();

  const handleCreateNote = () => {
    if (!editor) return

    const center = editor.getViewportScreenCenter();

    editor.createShape({
      type: 'note',
      x: center.x - 150,
      y: center.y - 125,
      props: {
        color: 'yellow',
        labelColor: 'black',
        richText: toRichText('Note from Sidebar'),
        size: 'm',
        font: 'draw',
        align: 'middle',
        verticalAlign: 'middle',
      },
    })
  };

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <div className="flex tems-center justify-center gap-1">
          <div className="flex aspect-square items-center justify-center">
            <HugeiconsIcon icon={Notebook02Icon} size={24} />
          </div>
          <div className={`flex items-center leading-none ${state === "collapsed" ? "hidden" : "block"}`}>
            <span className="font-medium text-x1 tracking-tight">Noted</span>
          </div>
        </div>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleCreateNote}
              className="flex items-center justify-center bg-sidebar-primary hover:bg-[#c4c4c4] mt-2 pr-4"
            >
              <HugeiconsIcon icon={Add01Icon} />
              <span className={state === "collapsed" ? "hidden" : "block"}>Create Note</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Your Board</SidebarGroupLabel>
          <SidebarMenu>
            {dummy_data.map((item) => (
              <Collapsible key={item.id} asChild defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title} >
                      {item.type === 'folder' ? <HugeiconsIcon icon={Folder01Icon} /> : <HugeiconsIcon icon={Note01Icon} />}
                      <span>{item.title}</span>
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                      />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.children?.map((child) => (
                        <SidebarMenuSubItem key={child.id}>
                          <SidebarMenuSubButton asChild>
                            <a href="#">
                              <HugeiconsIcon icon={Note01Icon} />
                              <span>{child.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
};