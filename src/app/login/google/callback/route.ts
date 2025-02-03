import { ROUTES } from "@/lib/routes";
import { setSessionTokenCookie } from "@/server/auth/cookie";
import { google } from "@/server/auth/google";
import { createSession, generateSessionToken } from "@/server/auth/session";
import { db } from "@/server/db";
import { user } from "@/server/db/schema";
import { decodeIdToken, type OAuth2Tokens } from "arctic";
import { cookies } from "next/headers";

type Claims = {
  sub: string;
  name: string;
};

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const allCookies = await cookies();
  const storedState = allCookies.get("google_oauth_state")?.value ?? null;
  const codeVerifier = allCookies.get("google_code_verifier")?.value ?? null;
  if (!code || !state || !storedState || !codeVerifier) {
    return new Response(null, {
      status: 400,
    });
  }
  if (state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }

  let tokens: OAuth2Tokens;
  try {
    tokens = await google.validateAuthorizationCode(code, codeVerifier);
  } catch (e) {
    // Invalid code or client credentials
    return new Response(null, {
      status: 400,
    });
  }
  const claims = decodeIdToken(tokens.idToken()) as Claims;
  const googleUserId = claims.sub;
  const username = claims.name;

  const existingUser = await db.query.user.findFirst({
    where: (u, { eq }) => eq(u.googleId, googleUserId),
  });

  if (existingUser) {
    const sessionToken = generateSessionToken();
    const session = await createSession(sessionToken, existingUser.id);
    await setSessionTokenCookie(sessionToken, session.expiresAt);
    return new Response(null, {
      status: 302,
      headers: {
        Location: ROUTES.dashboard.href,
      },
    });
  }

  await db.insert(user).values({
    googleId: googleUserId,
    username,
  });

  const insertedUser = await db.query.user.findFirst({
    where: (u, { eq }) => eq(u.googleId, googleUserId),
  });

  if (!insertedUser) {
    return new Response(null, {
      status: 400,
    });
  }

  const sessionToken = generateSessionToken();
  const session = await createSession(sessionToken, insertedUser.id);
  await setSessionTokenCookie(sessionToken, session.expiresAt);
  return new Response(null, {
    status: 302,
    headers: {
      Location: ROUTES.dashboard.href,
    },
  });
}
