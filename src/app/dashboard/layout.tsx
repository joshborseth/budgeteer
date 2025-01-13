import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getCurrentSession } from "@/server/auth/session";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await getCurrentSession();
  if (!user) return redirect("/login");
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <main className="grid h-full w-full flex-1 gap-4 p-4 lg:grid-cols-3 xl:grid-cols-3">
        {children}
      </main>
    </SidebarProvider>
  );
}
