import { LastMonth } from "@/components/LastMonth";
import { LastMonthExpenses } from "@/components/LastMonthExpenses";
import { ContentWrapper } from "@/components/PageWrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ROUTES } from "@/lib/routes";
import { NotebookPenIcon } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <ContentWrapper>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Dashboard</CardTitle>
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
        <LastMonth
          type="spending"
          amount={4400}
          overUnder="over"
          overUnderAmount={100}
        />
        <LastMonth type="income" amount={6000} />
        <LastMonthExpenses />
      </ContentWrapper>
    </>
  );
}
