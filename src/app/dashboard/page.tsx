import { BreadCrumbs } from "@/components/BreadCrumbs";
import { LastMonth } from "@/components/LastMonth";
import { LastMonthExpenses } from "@/components/LastMonthExpenses";
import { MostExpensiveStoreLastMonth } from "@/components/MostExpensiveStoreLastMonth";
import { GridLayout } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ROUTES } from "@/lib/routes";
import { NotebookPenIcon } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <BreadCrumbs activePage={ROUTES.dashboard.label} trail={[]} />
      <GridLayout>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Dashboard</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Introducing Our Dynamic Dashboard for Seamless Management and
              Insightful Analysis.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href={ROUTES.lists.href}>
              <Button className="flex gap-2">
                Create a List <NotebookPenIcon className="h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <LastMonth amount={4400} overUnder="over" overUnderAmount={100} />
        <MostExpensiveStoreLastMonth
          amount={200}
          store="Costco"
          overUnder="under"
          overUnderAmount={10}
        />
        <LastMonthExpenses />
      </GridLayout>
    </>
  );
}
