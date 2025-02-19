import Link from "next/link";
import { Button } from "./ui/button";
import { TypographyH1, TypographyP } from "./ui/typography";

export const Hero = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
}) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex max-w-lg flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-2">
          <TypographyH1 className="text-3xl font-bold md:text-4xl lg:text-7xl">
            {title}
          </TypographyH1>
          <TypographyP className="text-xl font-normal md:text-2xl">
            {description}
          </TypographyP>
        </div>
        <Link href={link.href}>
          <Button>{link.label}</Button>
        </Link>
      </div>
    </div>
  );
};
