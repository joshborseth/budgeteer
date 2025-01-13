import { Statements } from "@/components/statements/Statements";
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
    </>
  );
}
