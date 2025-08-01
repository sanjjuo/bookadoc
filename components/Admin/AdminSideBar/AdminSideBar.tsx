"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "@/components/User/common/Logo/Logo";
import Link from "next/link";
import { sideBarItems } from "./data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function AdminSideBar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="pt-3">
            <Logo placement="navbar" />
          </SidebarGroupLabel>
          <SidebarGroupContent className="py-10">
            <SidebarMenu>
              {sideBarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={cn(pathname === item.url ? "font-bold" : "")}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
