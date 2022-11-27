import { getHomePage } from "@/lib/notion/getHomePage";

export const revalidate = 10;

export default async function Head() {
  const { pageTitle } = await getHomePage();

  return (
    <>
      <title>{pageTitle}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
