import { getHomePage } from "../lib/notion/getHomePage";
import { BlocksRenderer } from "@/components/BlocksRenderer";

export const revalidate = 1;

export default async function Page() {
  const blockMap = await getHomePage();

  return (
    <>
      <BlocksRenderer blocks={blockMap.blocks} />
    </>
  );
}
