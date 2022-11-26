import { notion } from "../lib/notion/client";
import { isFullBlock } from "@notionhq/client";
import { RichText, Todo, Callout, Toggle, Video } from "./blocks";
import Image from "next/image";

type BlockList = Awaited<ReturnType<typeof notion.blocks.children.list>>;

interface Props {
  blocks: BlockList;
}

export const BlocksRenderer = ({ blocks }: Props) => {
  return (
    <article className="container mx-auto prose">
      {blocks.results.map((block) => {
        if (!isFullBlock(block)) return null;

        if (block.type === "image" && block.image.type === "external") {
          return (
            <Image
              key={block.id}
              alt={block.image.caption.map((part) => part.plain_text).join()}
              src={block.image.external.url}
              className="rounded"
              width="100"
              height="100"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          );
        }

        if (block.type === "image" && block.image.type == "file") {
          return (
            <Image
              key={block.id}
              alt={block.image.caption.map((part) => part.plain_text).join()}
              src={block.image.file.url}
              className="rounded"
              width="100"
              height="100"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          );
        }

        if (block.type === "paragraph") {
          return (
            <p key={block.id}>
              <RichText rich_text={block.paragraph.rich_text} />
            </p>
          );
        }

        if (block.type === "heading_1") {
          return (
            <h1 key={block.id}>
              <RichText rich_text={block.heading_1.rich_text} />
            </h1>
          );
        }

        if (block.type === "heading_2") {
          return (
            <h2 key={block.id}>
              <RichText rich_text={block.heading_2.rich_text} />
            </h2>
          );
        }

        if (block.type === "heading_3") {
          return (
            <h3 key={block.id}>
              <RichText rich_text={block.heading_3.rich_text} />
            </h3>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote key={block.id}>
              <RichText rich_text={block.quote.rich_text} />
            </blockquote>
          );
        }

        if (block.type === "divider") {
          return <hr key={block.id} />;
        }

        if (block.type === "to_do") {
          return <Todo key={block.id} todoItem={block} />;
        }

        if (block.type === "callout") {
          // @ts-expect-error Server Component */
          return <Callout key={block.id} block_id={block.id} />;
        }

        if (block.type === "bulleted_list_item") {
          return (
            <li key={block.id}>
              <RichText
                key={block.id}
                rich_text={block.bulleted_list_item.rich_text}
              />
            </li>
          );
        }

        if (block.type === "numbered_list_item") {
          return (
            <ol key={block.id}>
              <li>
                <RichText rich_text={block.numbered_list_item.rich_text} />
              </li>
            </ol>
          );
        }

        if (block.type === "toggle") {
          return (
            // @ts-expect-error Server Component
            <Toggle
              key={block.id}
              block_id={block.id}
              summary={block.toggle.rich_text}
            />
          );
        }

        if (block.type === "video") {
          return <Video key={block.id} videoBlock={block} />;
        }

        return <pre key={block.id}>{block.type}</pre>;
      })}
    </article>
  );
};
