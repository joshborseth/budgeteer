"use server";
import { ROUTES } from "@/lib/routes";
import { revalidatePath } from "next/cache";
import { parse } from "papaparse";
import "server-only";
import { z } from "zod";
import { statement } from "../db/schema";
import { getBudgeteerData } from "../lib/getBudgeteerData";
import { actionClient } from "../lib/safe-action";

export const uploadStatementAction = actionClient
  .schema(z.object({ csvData: z.instanceof(File) }))
  .action(async ({ parsedInput: { csvData } }) => {
    const { userId, db } = await getBudgeteerData();

    const text = await csvData.text();

    const { data } = parse<string[]>(text);

    await db.insert(statement).values({
      label: csvData.name,
      userId,
      processed: false,
      csvData: data,
    });
    revalidatePath(ROUTES.track);
  });
