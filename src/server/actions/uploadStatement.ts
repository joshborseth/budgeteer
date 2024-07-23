"use server";
import { ROUTES } from "@/lib/routes";
import { revalidatePath } from "next/cache";
import { parse } from "papaparse";
import "server-only";
import { statement } from "../db/schema";
import { getBudgeteerData } from "../lib/getBudgeteerData";

export const uploadStatementAction = async (formData: FormData) => {
  const { userId, db } = await getBudgeteerData();

  const file = formData.get("csvData") as File;

  const text = await file.text();

  const { data } = parse<string[]>(text);

  await db.insert(statement).values({
    label: file.name,
    userId,
    processed: false,
    csvData: data,
  });
  revalidatePath(ROUTES.track);
};
