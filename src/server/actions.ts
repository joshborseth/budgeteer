"use server";
import { actionClient } from "@/lib/safe-action";
import { deleteSessionTokenCookie } from "@/server/auth/cookie";
import { getCurrentSession, invalidateSession } from "@/server/auth/session";
import { redirect } from "next/navigation";
import "server-only";
export const logoutAction = actionClient.action(async () => {
  const { session } = await getCurrentSession();
  if (!session) return redirect("/login");
  await invalidateSession(session.id);
  await deleteSessionTokenCookie();
  return redirect("/login");
});
