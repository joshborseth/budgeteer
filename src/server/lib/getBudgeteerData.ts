import { auth } from "@clerk/nextjs/server";
import "server-only";
import { db } from "../db";

export const getBudgeteerData = async () => {
  const { userId } = await auth();

  if (!userId) throw new Error("User not found");

  return {
    userId,
    db,
  };
};
