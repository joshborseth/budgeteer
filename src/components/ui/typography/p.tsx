import { cn } from "@/lib/utils";

export function TypographyP({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <p className={cn("leading-7", className)}>{children}</p>;
}
