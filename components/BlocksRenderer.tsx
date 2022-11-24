import { notion } from "../lib/client";
import { isFullBlock } from "@notionhq/client";
import { Text } from "./blocks/text";

type BlockList = Awaited<ReturnType<typeof notion.blocks.children.list>>;

interface Props {
  blocks: BlockList;
}

export const BlocksRenderer = ({ blocks }: Props) => {
  return blocks.results.map((block) => {
    if (!isFullBlock(block)) return null;
    if (block.type === "paragraph") {
      return block.paragraph.rich_text.map((text) => {
        return <Text {...text.annotations}>{text.plain_text}</Text>;
      });
    }

    return <p>{block.type}</p>;
  });
};
