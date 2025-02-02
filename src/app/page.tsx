import { Hero } from "@/components/hero";
import { ROUTES } from "@/lib/routes";

export default function Page() {
  return (
    <Hero
      description="A penny saved is a penny earned."
      link={{ href: ROUTES.dashboard.href, label: "Get Started" }}
      title="Budgeteer"
    />
  );
}
