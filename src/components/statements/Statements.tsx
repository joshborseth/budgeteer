import { db } from "@/server/db";
import { statement } from "@/server/db/schema";
import { getBudgeteerData } from "@/server/lib/getBudgeteerData";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { TypographyP } from "../ui/typography";
import { StatementUploadForm } from "./StatementUploadForm";

export const Statements = async () => {
  const data = await getBudgeteerData();
  const statements = await db.query.statement.findMany({
    where: eq(statement.userId, data.user.id),
  });
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Statements</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64 pr-5">
          <ul className="flex flex-col gap-4 py-2">
            {statements.length ? (
              statements.map((item) => (
                <li
                  className="flex w-full list-disc items-center justify-between"
                  key={item.id}
                >
                  <div className="flex items-center justify-center gap-4">
                    <div>
                      <TypographyP className="text-sm font-medium">
                        {item.label}
                      </TypographyP>
                    </div>
                  </div>
                  <Link href={"#"}>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </Link>
                </li>
              ))
            ) : (
              <li>
                <TypographyP className="text-sm">
                  No statements found.
                </TypographyP>
              </li>
            )}
          </ul>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <StatementUploadForm />
      </CardFooter>
    </Card>
  );
};
