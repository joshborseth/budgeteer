"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const SidebarLink = (props: {
  item: { href: string; label: string };
}) => {
  const pathname = usePathname();
  return (
    <span className={cn(pathname === props.item.href && "font-semibold")}>
      {props.item.label}
    </span>
  );
};
