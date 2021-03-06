import {
  BlockObjectResponse,
  ListBlockChildrenResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { isFullBlock } from "@notionhq/client";
import {
  RichText,
  Todo,
  Callout,
  Toggle,
  Video,
  BulletedList,
  OrderedList,
  CmsImage,
} from ".";

interface Props {
  blocks: ListBlockChildrenResponse;
}

export const BlocksRenderer = ({ blocks }: Props) => {
  const blocksArr = blocks.results.reduce<
    Array<BlockObjectResponse | BlockObjectResponse[]>
  >((acc, value) => {
    if (!isFullBlock(value)) return acc;

    if (!acc.length) {
      if (
        value.type === "bulleted_list_item" ||
        value.type === "numbered_list_item"
      ) {
        acc.push([value]);
        return acc;
      } else {
        acc.push(value);
        return acc;
      }
    }

    if (
      acc[acc.length - 1][0] &&
      acc[acc.length - 1][0].type === "bulleted_list_item" &&
      value.type === "bulleted_list_item"
    ) {
      (acc[acc.length - 1] as BlockObjectResponse[]).push(value);
      return acc;
    }

    if (
      acc[acc.length - 1][0] &&
      acc[acc.length - 1][0].type === "numbered_list_item" &&
      value.type === "numbered_list_item"
    ) {
      (acc[acc.length - 1] as BlockObjectResponse[]).push(value);
      return acc;
    }

    if (
      value.type === "bulleted_list_item" ||
      value.type === "numbered_list_item"
    ) {
      acc.push([value]);
      return acc;
    }

    acc.push(value);
    return acc;
  }, []);

  return (
    <article className="container px-4 py-8 mx-auto mt-8 prose dark:prose-invert">
      {blocksArr.map((block) => {
        if (Array.isArray(block)) {
          return block[0].type === "bulleted_list_item" ? (
            // @ts-expect-error Server Component */
            <BulletedList key={block[0].id} listItems={block} />
          ) : (
            // @ts-expect-error Server Component */
            <OrderedList key={block[0].id} listItems={block} />
          );
        }

        if (!isFullBlock(block)) return null;

        if (block.type === "image") {
          return <CmsImage key={block.id} block={block} />;
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
