import { getHomePage } from "../lib/getHomePage";
import { BlocksRenderer } from "../components/BlocksRenderer";

export const revalidate = 1;

export default async function Page() {
  const blockMap = await getHomePage();

  // console.log(blockMap.blocks.results);

  return (
    <>
      <BlocksRenderer blocks={blockMap.blocks} />
    </>
  );
}
