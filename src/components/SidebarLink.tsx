"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { type items } from "./AppSidebar";

export const SidebarLink = (props: {
  item: Omit<(typeof items)[number], "icon">;
}) => {
  const pathname = usePathname();
  return (
    <span className={cn(pathname === props.item.url && "font-semibold")}>
      {props.item.title}
    </span>
  );
};
