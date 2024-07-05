import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { WavyBackground } from "@/components/wavy-bg";
import { ROUTES } from "@/lib/routes";
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
        <div className="flex flex-col gap-2">
          <TypographyH1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
            404
          </TypographyH1>
          <TypographyP className="text-lg font-normal md:text-xl">
            It looks like you&apos;re lost.
          </TypographyP>
        </div>
        <Link href={ROUTES.dashboard}>
          <Button>Go To Your Dashboard</Button>
        </Link>
      </div>
    </WavyBackground>
  );
}
