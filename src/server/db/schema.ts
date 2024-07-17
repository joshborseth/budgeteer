import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const transaction = sqliteTable("transaction", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  label: text("label", { length: 256 }).notNull(),
  createdAt: text("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: text("updatedAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdateFn(() => sql`CURRENT_TIMESTAMP`),
  type: text("type", { enum: ["expense", "income"] }),
  userId: text("userId", { length: 256 }).notNull(),
});

export const statement = sqliteTable("statement", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  label: text("label", { length: 256 }).notNull(),
  s3Url: text("s3Url", { length: 256 }),
  createdAt: text("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: text("updatedAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdateFn(() => sql`CURRENT_TIMESTAMP`),
  userId: text("userId", { length: 256 }).notNull(),
});
