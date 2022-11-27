import "./globals.css";

import { getHomePage, getNavigation } from "@/lib/notion";

export const revalidate = 10;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pageTitle } = await getHomePage();
  const navList = await getNavigation();

  return (
    <html>
      <head>
        <title>{pageTitle}</title>
      </head>
      <body>
        <nav></nav>
        <div>
          <pre>
            {JSON.stringify(
              navList.map((stuff) => stuff.properties.Navigation),
              null,
              2
            )}
          </pre>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
