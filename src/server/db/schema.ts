import { type InferSelectModel, relations } from "drizzle-orm";
import {
  index,
  int,
  integer,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

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

export const list = sqliteTable(
  "list",
  {
    id: text("id").primaryKey(),
    userId: integer("userId")
      .notNull()
      .references(() => user.id),
    name: text("name").notNull(),
  },
  (table) => [index("list_name_idx").on(table.name)],
);

export const listItem = sqliteTable("list_item", {
  id: text("id").primaryKey(),
  listId: integer("listId")
    .notNull()
    .references(() => list.id),
  name: text("name").notNull(),
  completed: int({ mode: "boolean" }).default(false).notNull(),
});

export const userRelations = relations(user, ({ many }) => ({
  session: many(session),
  list: many(list),
}));

export const listRelations = relations(list, ({ one, many }) => ({
  user: one(user, {
    fields: [list.userId],
    references: [user.id],
  }),
  items: many(listItem),
}));

export const listItemRelations = relations(listItem, ({ one }) => ({
  list: one(list, {
    fields: [listItem.listId],
    references: [list.id],
  }),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export type User = InferSelectModel<typeof user>;
export type Session = InferSelectModel<typeof session>;
