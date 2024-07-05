import { Hero } from "@/components/hero";
import { ROUTES } from "@/lib/routes";

export default function Page() {
  return (
    <Hero
      description="It looks like you're lost."
      link={{ href: ROUTES.dashboard, label: "Go to Dashboard" }}
      title="404 Not Found"
    />
  );
}
