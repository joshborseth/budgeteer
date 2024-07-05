import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { WavyBackground } from "@/components/wavy-bg";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";

export default async function Page() {
  return (
    <WavyBackground
      colors={[
        "hsl(262.1 83.3% 57.8%)",
        "hsl(262.1 83.3% 87.8%)",
        "hsl(262.1 83.3% 37.8%)",
      ]}
      backgroundFill="white"
      blur={7}
      waveOpacity={0.4}
    >
      <div className="flex max-w-lg flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-2">
          <TypographyH1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
            Budgeteer
          </TypographyH1>
          <TypographyP className="text-lg font-normal md:text-xl">
            Because a penny saved is a penny earned.
          </TypographyP>
        </div>
        <Link href={ROUTES.dashboard}>
          <Button>Get Started</Button>
        </Link>
      </div>
    </WavyBackground>
  );
}
