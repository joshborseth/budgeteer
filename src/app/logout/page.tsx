import { getCurrentSession, invalidateSession } from "@/server/auth/session";
import { deleteSessionTokenCookie } from "@/server/auth/cookie";
import { redirect } from "next/navigation";

export default async function Page() {
  return (
    <form
      action={async () => {
        "use server";
        const { session } = await getCurrentSession();
        if (!session) return redirect("/login");
        await invalidateSession(session.id);
        await deleteSessionTokenCookie();
        return redirect("/login");
      }}
    >
      <button>Sign out</button>
    </form>
  );
}
