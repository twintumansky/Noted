// import { FolderShapeUtil } from './FolderShape';
// import { toRichText } from 'tldraw';
// import { useCanvas } from "@/context/CanvasContext";
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
  useSidebar,
} from "@/components/ui/sidebar";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Folder01Icon,
  Note01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

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
];

export function AppSidebar() {
  const { state } = useSidebar();
  // const { editor } = useCanvas();

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <div className="flex tems-center justify-center gap-1">
          <div className="flex aspect-square items-center justify-center">
            <svg
              width="16"
              height="23"
              viewBox="0 0 16 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#93ada5" d="M14.301 5.43h.89v12.373h-.89z" />
              <path
                d="M16 1.187C16 .53 15.469 0 14.813 0h-1.632c-.655 0-1.187.531-1.187 1.187v4.881c0 .994 1.149 1.548 1.927.929l1.631-1.3c.283-.225.448-.567.448-.928z"
                fill="#616e7d"
              />
              <rect width="14.628" height="22.965" rx="1.187" fill="#616e7d" />
              <path
                d="M15.993 21.766c0 .655-.532 1.186-1.187 1.186h-2.81a1.187 1.187 0 0 1-1.186-1.187v-5.27c0-.93 1.021-1.498 1.812-1.009l2.809 1.741c.35.216.562.598.562 1.009z"
                fill="#616e7d"
              />
              <path d="M.672 1.187v20.591H.338V1.187z" fill="#56616e" />
            </svg>
          </div>
          <div
            className={`flex items-center leading-none ${state === "collapsed" ? "hidden" : "block"}`}
          >
            <span className="font-medium text-x1 tracking-tight">Noted</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Your Board</SidebarGroupLabel>
          <SidebarMenu>
            {dummy_data.map((item) => (
              <Collapsible
                key={item.id}
                asChild
                defaultOpen
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.type === "folder" ? (
                        <HugeiconsIcon icon={Folder01Icon} />
                      ) : (
                        <HugeiconsIcon icon={Note01Icon} />
                      )}
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
  );
}
