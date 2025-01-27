import { cn } from "@/lib/utils";
import React from "react";

const TypographyP = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("leading-7", className)} {...props} />
));
TypographyP.displayName = "TypographyP";

export { TypographyP };
