import { cn } from "@/lib/utils";

export function TypographyH1({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}