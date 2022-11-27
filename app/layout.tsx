import "./globals.css";

import { getHomePage, getNavigation } from "@/lib/notion";
import { Navbar } from "@/components/Navbar";
import { Inter } from "@next/font/google";

const inter = Inter({
  variable: "--font-inter",
});
export const revalidate = 10;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pageTitle } = await getHomePage();
  const { header, footer } = await getNavigation();

  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>{pageTitle}</title>
      </head>
      <body>
        <Navbar headerLinks={header} />
        <main className="pt-24 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
