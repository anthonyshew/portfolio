import { getLanding } from "@/lib/notion";
export default async function Head({ params }) {
  const landing = await getLanding(params.slug);
  console.log(
    landing.pageMeta.properties.Title.title
      .map((text) => text.plain_text)
      .join()
  );
  return (
    <>
      <title>
        {landing.pageMeta.properties.Title.title
          .map((text) => text.plain_text)
          .join()}{" "}
        | Anthony Shew
      </title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
