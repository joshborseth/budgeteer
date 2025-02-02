"use client";

import { logoutAction } from "@/server/actions/logout";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export const SidebarLogoutButton = () => {
  return (
    <DropdownMenuItem onClick={async () => await logoutAction()}>
      Logout
    </DropdownMenuItem>
  );
};
