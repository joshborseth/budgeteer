import { env } from "@/env";
import { Google } from "arctic";

export const google = new Google(
  env.GOOGLE_CLIENT_ID,
  env.GOOGLE_CLIENT_SECRET,
  env.NODE_ENV === "production"
    ? "https://budgeteer-gamma.vercel.app/login/google/callback"
    : "http://localhost:3000/login/google/callback",
);
