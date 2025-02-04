import { ChevronUp, Home, List, LucideProps, User2 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { type ROUTE } from "@/lib/routes";
import { getBudgeteerData } from "@/server/lib/getBudgeteerData";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes, Suspense } from "react";
import { SidebarIconWrapper } from "./SidebarIconWrapper";
import { SidebarLink } from "./SidebarLink";
import { SidebarLists } from "./SidebarLists";
import { SidebarLogoutButton } from "./SidebarLogoutButton";
import { ModeToggle } from "./ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const items = [
  {
    label: "Dashboard",
    href: "/dashboard",
    sub: false,
    icon: Home,
  },
  {
    label: "Lists",
    href: "/dashboard/lists",
    sub: true,
    icon: List,
  },
] satisfies Array<
  ROUTE & {
    sub: boolean;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  }
>;

export async function AppSidebar() {
  const { user } = await getBudgeteerData();
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Budgeteer</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <>
                  {item.sub ? (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton tooltip={item.label} asChild>
                        <Link href={item.href}>
                          <SidebarIconWrapper>
                            <item.icon />
                          </SidebarIconWrapper>
                          <SidebarLink
                            item={{ href: item.href, label: item.label }}
                          />
                        </Link>
                      </SidebarMenuButton>
                      <Suspense>
                        <SidebarLists />
                      </Suspense>
                    </SidebarMenuItem>
                  ) : (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton tooltip={item.label} asChild>
                        <Link href={item.href}>
                          <SidebarIconWrapper>
                            <item.icon />
                          </SidebarIconWrapper>
                          <SidebarLink
                            item={{ href: item.href, label: item.label }}
                          />
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle />
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> {user.username}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <SidebarLogoutButton />
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
