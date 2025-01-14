import { ContentWrapper } from "@/components/PageWrapper";
import { Statements } from "@/components/statements/Statements";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getCurrentSession } from "@/server/auth/session";
import { db } from "@/server/db";
import { redirect } from "next/navigation";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Page() {
  const { session } = await getCurrentSession();
  if (!session) {
    return redirect("/login");
  }
  const transactions = await db.query.transaction.findMany({
    where: (t, { eq }) => eq(t.userId, session.userId),
  });
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Track</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <ContentWrapper>
        <div className="col-span-2">
          <DataTable
            columns={columns}
            data={transactions.map((t) => {
              const formattedPrice = t.income
                ? `+ $${t.income}`
                : `- $${t.expense}`;
              return {
                price: formattedPrice,
                name: t.label,
                date: new Date(t.transactionDate).toLocaleDateString(),
              };
            })}
          />
        </div>
        <div className="max-h-fit">
          <Statements />
        </div>
      </ContentWrapper>
    </>
  );
}
