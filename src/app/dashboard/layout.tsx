import { AppSidebar } from "@/components/AppSidebar";
import { Separator } from "@/components/ui/separator";
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
      <div className="flex w-full flex-col">
        <div className="bg-sidebar w-full border-b py-2">
          <div className="px-4">
            <SidebarTrigger />
          </div>
          <Separator orientation="vertical" />
        </div>
        <main className="flex w-full flex-col gap-4 p-4 lg:grid lg:grid-cols-3 xl:grid-cols-3">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
