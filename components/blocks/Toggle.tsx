import { notion } from "@/lib/notion/client";
import { RichText } from "@/components/blocks/RichText";
import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { BlocksRenderer } from "@/components/blocks/BlocksRenderer";

interface Props {
  block_id: string;
  summary: RichTextItemResponse[];
}

export const Toggle = async ({ block_id, summary }: Props) => {
  const blocks = await notion.blocks.children.list({
    block_id,
  });

  return (
    <details className="p-4 rounded bg-slate-400">
      <summary>
        <RichText rich_text={summary} />
      </summary>
      <BlocksRenderer blocks={blocks} />
    </details>
  );
};
