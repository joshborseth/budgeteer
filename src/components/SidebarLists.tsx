import { getLists } from "@/server/queries";

import {
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";
import { SidebarLink } from "./SidebarLink";
export async function SidebarLists() {
  const lists = await getLists();
  return (
    <>
      {!!lists?.length && (
        <SidebarMenuSub>
          {lists.map((item) => (
            <SidebarMenuSubItem key={item.id}>
              <SidebarMenuSubButton asChild>
                <Link href={`${ROUTES.lists.href}/${item.name}`}>
                  <SidebarLink
                    item={{
                      href: `${ROUTES.lists.href}/${item.name}`,
                      label: item.name,
                    }}
                  />
                </Link>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      )}
    </>
  );
}
