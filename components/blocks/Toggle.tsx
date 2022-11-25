import { useId } from "react";
import { notion } from "@/lib/notion/client";
import { isFullBlock } from "@notionhq/client";
import { Text } from "@/components/blocks/Text";
import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { BlocksRenderer } from "@/components/BlocksRenderer";

interface Props {
  block_id: string;
  summary: RichTextItemResponse[];
}

export const Toggle = async ({ block_id, summary }: Props) => {
  const id = useId();

  const blocks = await notion.blocks.children.list({
    block_id,
  });

  return (
    <details className="p-4 rounded bg-slate-400">
      <summary>
        {summary.map((text) => {
          return (
            <Text key={id} {...text.annotations}>
              {text.plain_text}
            </Text>
          );
        })}
      </summary>

      <BlocksRenderer blocks={blocks} />
    </details>
  );
};
