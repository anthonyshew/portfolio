import { notion } from "@/lib/notion/client";
import { BulletedListItemBlockObjectResponse, NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { isFullBlock } from "@notionhq/client";

type BlockList = Awaited<ReturnType<typeof notion.blocks.children.list>>;

export const handleListItems = <T extends BulletedListItemBlockObjectResponse | NumberedListItemBlockObjectResponse>({
  blocksArray,
  arrayStartIndex,
  block
}: {
  blocksArray: BlockList
  arrayStartIndex: number
  block: T
}): T[] => {
  let listItems: Array<BulletedListItemBlockObjectResponse | NumberedListItemBlockObjectResponse> = [];

  // Push first block to list
  listItems.push(block);

  const nextIndex = arrayStartIndex + 1;
  const nextBlock = blocksArray.results[nextIndex];

  if (!isFullBlock(nextBlock)) return

  if (
    nextBlock.type === "bulleted_list_item" || nextBlock.type === "numbered_list_item"
  ) {
    listItems.push(nextBlock);
    blocksArray.results.splice(arrayStartIndex, 1);
  }

  return listItems as T[]
}