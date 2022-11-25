import { notion } from "../lib/client";
import { isFullBlock } from "@notionhq/client";
import { Text } from "./blocks/Text";
import { Heading1 } from "./blocks/Heading1";

type BlockList = Awaited<ReturnType<typeof notion.blocks.children.list>>;
type Deal = BlockList["results"][0];

interface Props {
  blocks: BlockList;
}

export const BlocksRenderer = ({ blocks }: Props) => {
  return (
    <article className="container mx-auto prose">
      {blocks.results.map((block) => {
        if (!isFullBlock(block)) return null;
        if (block.type === "paragraph") {
          // return <Text block={block} />;
          return (
            <p>
              {block.paragraph.rich_text.map((text) => {
                return <Text {...text.annotations}>{text.plain_text}</Text>;
              })}
            </p>
          );
        }
        // if (block.type === "heading_1") {
        //   <h1>
        //     {block.heading_1.rich_text.map((text) => {
        //       return (
        //         <Heading1 {...text.annotations}>{text.plain_text}</Heading1>
        //       );
        //     })}
        //   </h1>;
        // }
        // if (block.type === "heading_2") {
        //   return block.heading_2.rich_text.map((text) => {
        //     return <h2 {...text.annotations}>{text.plain_text}</h2>;
        //   });
        // }

        return <p>{block.type}</p>;
      })}
    </article>
  );
};
