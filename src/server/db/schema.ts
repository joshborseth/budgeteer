import { sql } from "drizzle-orm";
import { blob, int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const transaction = sqliteTable("transaction", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  label: text("label", { length: 256 }).notNull(),
  createdAt: text("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: text("updatedAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdateFn(() => sql`CURRENT_TIMESTAMP`),
  transactionDate: text("transactionDate").notNull(),
  expense: int("expense").notNull(),
  income: int("income").notNull(),
  userId: text("userId", { length: 256 }).notNull(),
});

export const statement = sqliteTable("statement", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  label: text("label", { length: 256 }).notNull(),
  createdAt: text("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  csvData: blob("csvData", { mode: "json" }).$type<string[][]>().notNull(),
  updatedAt: text("updatedAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdateFn(() => sql`CURRENT_TIMESTAMP`),
  userId: text("userId", { length: 256 }).notNull(),
  processed: integer("processed", { mode: "boolean" }).default(false),
});
