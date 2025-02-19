import { Toaster } from "@/components/ui/sonner";
import { ReactQueryProvider } from "@/lib/providers/react-query";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Budgeteer",
  description: "A penny saved is a penny earned.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable}`}
    >
      <body>
        <ReactQueryProvider>
          {children}
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
