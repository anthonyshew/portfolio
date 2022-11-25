import { use } from "react";
import { notion } from "@/lib/notion/client";

interface Props {
  block_id: string;
}

export const Callout = async ({ block_id }: Props) => {
  const blocks = await notion.blocks.retrieve({
    block_id,
  });

  return <pre>{JSON.stringify(blocks, null, 2)}</pre>;
};
