import "./globals.css";

import { getHomePage, getNavigation } from "@/lib/notion";

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
        <nav></nav>
        <div>
          <pre>{JSON.stringify(desktop, null, 2)}</pre>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
