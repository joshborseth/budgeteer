import { Hero } from "@/components/hero";
import { ROUTES } from "@/lib/routes";

export default function Page() {
  return (
    <Hero
      description="It looks like you're lost."
      link={{ href: ROUTES.dashboard.href, label: ROUTES.dashboard.label }}
      title="404 Not Found"
    />
  );
}
