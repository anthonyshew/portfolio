import { useId } from "react";
import { notion } from "../lib/notion/client";
import { isFullBlock } from "@notionhq/client";
import { Text } from "./blocks/Text";
import { Todo } from "./blocks/Todo";
import { Callout } from "./blocks/Callout";
import { Toggle } from "./blocks/Toggle";
import Image from "next/image";

type BlockList = Awaited<ReturnType<typeof notion.blocks.children.list>>;

interface Props {
  blocks: BlockList;
}

export const BlocksRenderer = ({ blocks }: Props) => {
  const id = useId();

  return (
    <article className="container mx-auto prose">
      {blocks.results.map((block) => {
        if (!isFullBlock(block)) return null;

        if (block.type === "image" && block.image.type === "external") {
          return (
            <Image
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
            <p>
              {block.paragraph.rich_text.map((text) => {
                return (
                  <Text key={id} {...text.annotations} href={text.href}>
                    {text.plain_text}
                  </Text>
                );
              })}
            </p>
          );
        }

        if (block.type === "heading_1") {
          return (
            <h1>
              {block.heading_1.rich_text.map((text) => {
                return (
                  <Text key={id} {...text.annotations}>
                    {text.plain_text}
                  </Text>
                );
              })}
            </h1>
          );
        }

        if (block.type === "heading_2") {
          return (
            <h2>
              {block.heading_2.rich_text.map((text) => {
                return (
                  <Text key={id} {...text.annotations}>
                    {text.plain_text}
                  </Text>
                );
              })}
            </h2>
          );
        }

        if (block.type === "heading_3") {
          return (
            <h3>
              {block.heading_3.rich_text.map((text) => {
                return (
                  <Text key={id} {...text.annotations}>
                    {text.plain_text}
                  </Text>
                );
              })}
            </h3>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote>
              {block.quote.rich_text.map((text) => {
                return (
                  <Text key={id} {...text.annotations}>
                    {text.plain_text}
                  </Text>
                );
              })}
            </blockquote>
          );
        }

        if (block.type === "divider") {
          return <hr />;
        }

        if (block.type === "to_do") {
          return <Todo />;
        }

        if (block.type === "callout") {
          // @ts-expect-error Server Component */
          return <Callout block_id={block.id} />;
        }

        if (block.type === "bulleted_list_item") {
          return (
            <li>
              {block.bulleted_list_item.rich_text.map((text) => {
                return (
                  <Text key={id} {...text.annotations}>
                    {text.plain_text}
                  </Text>
                );
              })}
            </li>
          );
        }

        if (block.type === "numbered_list_item") {
          return (
            <ol>
              <li>
                {block.numbered_list_item.rich_text.map((text) => {
                  return (
                    <Text key={id} {...text.annotations}>
                      {text.plain_text}
                    </Text>
                  );
                })}
              </li>
            </ol>
          );
        }

        if (block.type === "toggle") {
          console.log(block.toggle);

          return (
            // @ts-expect-error Server Component
            <Toggle block_id={block.id} summary={block.toggle.rich_text} />
          );
        }

        return <pre>{block.type}</pre>;
      })}
    </article>
  );
};
