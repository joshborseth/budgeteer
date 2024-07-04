import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { WavyBackground } from "@/components/ui/wavy-bg";
import Link from "next/link";

export default async function Page() {
  return (
    <WavyBackground
      colors={["#E944F0", "#F03F3F", "#F550CD", "#9531EF"]}
      backgroundFill="white"
      blur={7}
      waveOpacity={0.4}
    >
      <div className="flex max-w-lg flex-col items-center gap-8 text-center">
        <div>
          <TypographyH1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
            PiggyPal
          </TypographyH1>
          <TypographyP className="text-lg font-normal md:text-xl">
            Track your savings so you can buy cool things.
          </TypographyP>
        </div>
        <Link href={"/dashboard"}>
          <Button>Get Started</Button>
        </Link>
      </div>
    </WavyBackground>
  );
}
