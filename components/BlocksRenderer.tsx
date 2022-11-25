import { useId } from "react";
import { notion } from "../lib/client";
import { isFullBlock } from "@notionhq/client";
import { Text } from "./blocks/Text";
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

        return <pre>{block.type}</pre>;
      })}
    </article>
  );
};
