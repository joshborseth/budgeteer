"use server";
import { ROUTES } from "@/lib/routes";
import { DateTime } from "luxon";
import { revalidatePath } from "next/cache";
import { parse } from "papaparse";
import { map } from "radash";
import "server-only";
import { z } from "zod";
import { createServerAction } from "zsa";
import { statement, transaction } from "../db/schema";
import { getBudgeteerData } from "../lib/getBudgeteerData";

export const uploadStatementAction = createServerAction()
  .input(
    z.object({
      csvData: z.string(),
      fileName: z.string(),
    }),
  )
  .handler(async ({ input: { csvData, fileName } }) => {
    const { user, db } = await getBudgeteerData();

    const { data } = parse<string[]>(csvData);

    await db.insert(statement).values({
      label: fileName,
      userId: user.id,
      processed: false,
      csvData: data,
    });

    await map(data, async (row) => {
      // skip empty rows
      if (row.every((c) => !c)) return;
      //based on TD Canada csv format
      const [unformattedTransactionDate, label, expense, income] = row;

      if (!unformattedTransactionDate) {
        throw new Error("Transaction date is required");
      }

      const transactionDate = DateTime.fromFormat(
        unformattedTransactionDate,
        "mm/dd/yyyy",
      ).toFormat("yyyy-mm-dd");

      if (!transactionDate) {
        throw new Error("Invalid transaction date");
      }

      if (!label) {
        throw new Error("Label is required");
      }
      if (!expense && !income) {
        throw new Error("Transaction must have either an expense or an income");
      }
      await db.insert(transaction).values({
        userId: user.id,
        expense: Number(expense),
        income: Number(income),
        transactionDate,
        label,
      });
    });

    revalidatePath(ROUTES.track.href);
  });
