import { LuInbox } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";




import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Home",
    url: "#",
    icon: IoHomeOutline ,
  },
  {
    title: "Inbox",
    url: "#",
    icon: LuInbox ,
  },
  {
    title: "Calendar",
    url: "#",
    icon: SlCalender,
  },
  {
    title: "Search",
    url: "#",
    icon: MdOutlineScreenSearchDesktop,
  },
  {
    title: "Settings",
    url: "#",
    icon: IoSettingsOutline ,
  },
]

export function AppSidebar() {
    
  return (
   <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}