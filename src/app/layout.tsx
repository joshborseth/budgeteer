import { NextAuthSessionProvider } from "@/components/SessionProvider";
import SignInOrSignOut from "@/components/SignInOrSignOut";
import { TypographyH1 } from "@/components/ui/typography";
import { getServerAuthSession } from "@/server/auth";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Budgeteer",
  description: "Because money doesn't grow on trees",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const otherSession = await getServerAuthSession();
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <NextAuthSessionProvider session={otherSession}>
        <body>
          {otherSession?.user.id ? (
            <>
              {children}
              <SignInOrSignOut />
            </>
          ) : (
            <div>
              <TypographyH1>Not Signed In</TypographyH1>
              <SignInOrSignOut />
            </div>
          )}
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
