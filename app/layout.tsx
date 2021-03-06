import "./globals.css";

import { getNavigation } from "@/lib/notion";
import { Navbar } from "@/components/Navbar";
import { AnalyticsWrapper } from "@/components/AnalyticsWrapper";
import { Inter } from "@next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const revalidate = 10;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { header } = await getNavigation();

  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar headerLinks={header} />
        <main className="pt-24 min-h-screen dark:bg-black">{children}</main>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
