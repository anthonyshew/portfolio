import { useId } from "react";
import { notion } from "@/lib/notion/client";
import { isFullBlock } from "@notionhq/client";
import { Text } from "@/components/blocks/Text";

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
        {blocks.callout.rich_text.map((text) => {
          return (
            <Text key={id} {...text.annotations}>
              {text.plain_text}
            </Text>
          );
        })}
      </div>
    );
  }

  return null;
};
