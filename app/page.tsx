import { getLanding } from "../lib/notion";
import { BlocksRenderer } from "@/components/blocks/BlocksRenderer";

export const revalidate = 1;

export default async function Page() {
  const blockMap = await getLanding("home");

  return <BlocksRenderer blocks={blockMap.blocks} />;
}
