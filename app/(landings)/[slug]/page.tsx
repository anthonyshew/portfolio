import { getLanding } from "@/lib/notion";
import { BlocksRenderer } from "@/components/blocks/BlocksRenderer";

export const revalidate = 1;

export default async function Page({ params }) {
  const landing = await getLanding(params.slug);

  return <BlocksRenderer blocks={landing.blocks} />;
}
