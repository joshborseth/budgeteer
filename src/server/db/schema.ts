import { type InferSelectModel, relations, sql } from "drizzle-orm";
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
  userId: integer("userId")
    .notNull()
    .references(() => user.id),
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
  userId: integer("userId")
    .notNull()
    .references(() => user.id),
  processed: integer("processed", { mode: "boolean" }).default(false),
});

export const user = sqliteTable("user", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  googleId: text("googleId", { length: 256 }).notNull(),
  username: text("username", { length: 256 }).notNull(),
});

export const session = sqliteTable("session", {
  id: text("id").primaryKey(),
  userId: integer("userId")
    .notNull()
    .references(() => user.id),
  expiresAt: integer("expires_at", {
    mode: "timestamp",
  }).notNull(),
});

export const userRelations = relations(user, ({ many }) => ({
  session: many(session),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export type User = InferSelectModel<typeof user>;
export type Session = InferSelectModel<typeof session>;
