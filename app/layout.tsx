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
  const { desktop, footer, mobile } = await getNavigation();

  return (
    <html>
      <head>
        <title>{pageTitle}</title>
      </head>
      <body>
        <Navbar mobileLinks={mobile} desktopLinks={desktop} />
        <main className="pt-24 md:pt-20 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
