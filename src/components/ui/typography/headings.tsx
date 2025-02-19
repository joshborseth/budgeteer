export function TypographyH1({ ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      {...props}
    />
  );
}

export function TypographyH2({ ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    />
  );
}
export function TypographyH3({ ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className="scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    />
  );
}
