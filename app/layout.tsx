import "./globals.css";

import { getHomePage } from "@/lib/notion/getHomePage";

export const revalidate = 10;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageData = await getHomePage();

  return (
    <html>
      <head>
        <title>{pageData.pageTitle}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
