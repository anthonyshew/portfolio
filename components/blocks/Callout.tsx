import { useId } from "react";
import { notion } from "@/lib/notion/client";
import { isFullBlock } from "@notionhq/client";
import { RichText } from "@/components/blocks/RichText";

interface Props {
  block_id: string;
}

export const Callout = async ({ block_id }: Props) => {
  const id = useId();

  const blocks = await notion.blocks.retrieve({
    block_id,
  });

  if (isFullBlock(blocks) && blocks.type === "callout") {
    return (
      <div className="p-4 rounded bg-slate-400">
        <RichText rich_text={blocks.callout.rich_text} />
      </div>
    );
  }

  return null;
};
