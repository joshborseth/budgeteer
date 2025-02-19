"use client";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";
import { useSidebar } from "./ui/sidebar";

export const SidebarIconWrapper = (props: { children: ReactNode }) => {
  const { open } = useSidebar();

  return (
    <div
      className={cn(
        open ? "hidden" : "flex h-full w-full items-center justify-center",
      )}
    >
      {props.children}
    </div>
  );
};
