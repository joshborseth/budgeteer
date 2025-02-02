"use server";
import { deleteSessionTokenCookie } from "@/server/auth/cookie";
import { getCurrentSession, invalidateSession } from "@/server/auth/session";
import { redirect } from "next/navigation";
import "server-only";
import { createServerAction } from "zsa";
export const logoutAction = createServerAction().handler(async () => {
  const { session } = await getCurrentSession();
  if (!session) return redirect("/login");
  await invalidateSession(session.id);
  await deleteSessionTokenCookie();
  return redirect("/login");
});
