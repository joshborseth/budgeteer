import { DesktopNavigationLink } from "@/components/navigation/DesktopNavigationLink";
import { MobileNavigationLink } from "@/components/navigation/MobileNavigationLink";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ROUTES } from "@/lib/routes";
import { SignOutButton } from "@clerk/nextjs";
import { DollarSignIcon, LayoutDashboardIcon, MenuIcon } from "lucide-react";
import Image from "next/image";

const ICON_CLASS_NAME = "h-5 w-5";

const LINKS = [
  {
    label: "Dashboard",
    href: ROUTES.dashboard,
    icon: <LayoutDashboardIcon className={ICON_CLASS_NAME} />,
  },
  {
    label: "Track Expenses",
    href: ROUTES.track,
    icon: <DollarSignIcon className={ICON_CLASS_NAME} />,
  },
];

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Image
            src="/logo.png"
            alt="Budgeteer Logo"
            width={75}
            height={75}
            className="h-8 w-8 rounded-lg"
          />
          <Separator />
          <TooltipProvider>
            {LINKS.map((props) => (
              <DesktopNavigationLink {...props} key={props.label} />
            ))}
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex h-full flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <div className="h-5" />
                {LINKS.map((props) => (
                  <MobileNavigationLink {...props} key={props.label} />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex h-10 w-full items-center justify-between">
            <div className="ml-auto flex flex-1 justify-end md:grow-0">
              <SignOutButton>
                <Button variant="outline">Sign Out</Button>
              </SignOutButton>
            </div>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}
