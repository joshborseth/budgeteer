"use client";

import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
export default function Signin() {
  const { data: session } = useSession();
  return (
    <Button
      onClick={async () => {
        if (session) return;
        await signIn("google");
      }}
    >
      Signin
    </Button>
  );
}
