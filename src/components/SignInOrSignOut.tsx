"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
export default function SignInOrSignOut() {
  const { data: session } = useSession();
  if (session?.user.id) {
    return (
      <Button
        onClick={async () => {
          await signOut();
        }}
      >
        Sign Out
      </Button>
    );
  }

  return (
    <Button
      onClick={async () => {
        await signIn("google");
      }}
    >
      Sign In
    </Button>
  );
}
