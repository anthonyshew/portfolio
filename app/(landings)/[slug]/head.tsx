import { getLanding } from "@/lib/notion";

export default async function Head({ params }) {
  const data = await getLanding(params.slug);

  const title = data.pageMeta.properties.Title.title[0].plain_text;

  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
