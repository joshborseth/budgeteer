"use server";
import "server-only";
import { db } from "./db";
import { getBudgeteerData } from "./lib/getBudgeteerData";

export const getLists = async () => {
  const { user } = await getBudgeteerData();
  const lists = await db.query.list.findMany({
    where: (l, { eq }) => eq(l.userId, user.id),
    with: {
      items: {
        orderBy: (l, { asc }) => [asc(l.completed)],
      },
    },
  });
  await sleep(3000);
  return lists;
};

export const getListById = async (listId: string) => {
  const { user } = await getBudgeteerData();
  const list = await db.query.list.findFirst({
    where: (l, { eq, and }) => and(eq(l.userId, user.id), eq(l.id, listId)),
    with: {
      items: {
        orderBy: (l, { asc }) => [asc(l.completed)],
      },
    },
  });

  if (!list) throw new Error("List not found");
  await sleep(3000);
  return list;
};
export const getListByName = async (name: string) => {
  const { user } = await getBudgeteerData();
  const list = await db.query.list.findFirst({
    where: (l, { eq, and }) => and(eq(l.userId, user.id), eq(l.name, name)),
    with: {
      items: {
        orderBy: (l, { asc }) => [asc(l.completed)],
      },
    },
  });

  if (!list) throw new Error("List not found");
  await sleep(3000);
  return list;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
