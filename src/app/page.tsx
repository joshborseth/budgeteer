import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { WavyBackground } from "@/components/ui/wavy-bg";

export default async function Home() {
  return (
    <WavyBackground>
      <div className="flex flex-col items-center gap-8">
        <div>
          <TypographyH1 className="text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl">
            Hero waves are cool
          </TypographyH1>
          <TypographyP className="text-center text-lg font-normal text-white md:text-xl">
            Leverage the power of canvas to create a beautiful hero section
          </TypographyP>
        </div>
        <Button>Get Started</Button>
      </div>
    </WavyBackground>
  );
}
