import { cn } from "@/lib/utils";
import React from "react";

const TypographyH1 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      className,
    )}
    {...props}
  />
));
TypographyH1.displayName = "TypographyH1";

const TypographyH2 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
      className,
    )}
    {...props}
  />
));
TypographyH2.displayName = "TypographyH2";

const TypographyH3 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "scroll-m-20 text-2xl font-semibold tracking-tight",
      className,
    )}
    {...props}
  />
));
TypographyH3.displayName = "TypographyH3";

export { TypographyH1, TypographyH2, TypographyH3 };
