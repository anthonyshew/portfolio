import { notion } from "@/lib/notion/client";
import { isFullBlock } from "@notionhq/client";
import { RichText } from "@/components/blocks/RichText";

interface Props {
  block_id: string;
}

export const Callout = async ({ block_id }: Props) => {
  const blocks = await notion.blocks.retrieve({
    block_id,
  });

  if (isFullBlock(blocks) && blocks.type === "callout") {
    return (
      <div className="relative p-6 pt-8 rounded bg-gray-600 text-gray-300">
        <span className="absolute -top-3 -left-3 text-4xl">
          {(blocks.callout.icon as { type: string; emoji: string }).emoji}
        </span>
        <RichText rich_text={blocks.callout.rich_text} />
      </div>
    );
  }

  return null;
};
