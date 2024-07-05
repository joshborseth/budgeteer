import { MonthlySpend } from "@/components/MonthlySpend";
import { MonthlySpendRemaing } from "@/components/MonthlySpendRemaing";
import { RecentExpenses } from "@/components/RecentExpenses";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WeeklySpend } from "@/components/WeeklySpend";
import { WeeklySpendRemaing } from "@/components/WeeklySpendRemaining";
import { ROUTES } from "@/lib/routes";
import { NotebookPenIcon } from "lucide-react";
import Link from "next/link";
export default async function Page() {
  return (
    <main className="grid h-full flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="sm:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle>Your Spending</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Introducing Our Dynamic Dashboard for Seamless Management and
                Insightful Analysis.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href={ROUTES.track}>
                <Button className="flex gap-2">
                  Start Tracking <NotebookPenIcon className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <MonthlySpend />
          <WeeklySpend />
          <MonthlySpendRemaing />
          <WeeklySpendRemaing />
        </div>
      </div>
      <RecentExpenses />
    </main>
  );
}
