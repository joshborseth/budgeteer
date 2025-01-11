import { cookies } from "next/headers";
import { SESSION_COOKIE_NAME } from "../constants";

export async function setSessionTokenCookie(
  token: string,
  expiresAt: Date,
): Promise<void> {
  const allCookies = await cookies();
  allCookies.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    path: "/",
  });
}

export async function deleteSessionTokenCookie(): Promise<void> {
  const allCookies = await cookies();
  allCookies.set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/",
  });
}
