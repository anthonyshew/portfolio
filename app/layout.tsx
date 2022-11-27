import "./globals.css";

import { getHomePage, getNavigation } from "@/lib/notion";
import { Navbar } from "@/components/Navbar";

export const revalidate = 10;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pageTitle } = await getHomePage();
  const { desktop } = await getNavigation();

  return (
    <html>
      <head>
        <title>{pageTitle}</title>
      </head>
      <body>
        <Navbar />
        <main className="pt-16 md:pt-20">{children}</main>
      </body>
    </html>
  );
}
