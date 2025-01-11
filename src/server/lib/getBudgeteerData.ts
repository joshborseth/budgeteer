import "server-only";
import { db } from "../db";
import { getCurrentSession } from "../auth/session";
import { redirect } from "next/navigation";

export const getBudgeteerData = async () => {
  const { user } = await getCurrentSession();
  if (!user) return redirect("/login");
  return {
    db,
    user,
  };
};
