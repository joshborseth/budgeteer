"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { type items } from "./AppSidebar";

export const SidebarLink = (props: {
  item: Pick<(typeof items)[number], "href" | "label">;
}) => {
  const pathname = usePathname();
  return (
    <span className={cn(pathname === props.item.href && "font-semibold")}>
      {props.item.label}
    </span>
  );
};
