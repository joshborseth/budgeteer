"use client";
import { type ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileNavigationLink = ({
  label,
  href,
  icon,
}: {
  label: string;
  href: (typeof ROUTES)[keyof typeof ROUTES];
  icon: React.ReactNode;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground",
        pathname === href && "text-foreground",
      )}
    >
      {icon}
      {label}
    </Link>
  );
};
