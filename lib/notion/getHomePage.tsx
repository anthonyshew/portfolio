import { notion } from "./client";
import {
  GetPagePropertyResponse,
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const getHomePage = async () => {
  const [pageMeta, blocks] = await Promise.all([
    (await notion.pages.retrieve({
      page_id: process.env.INDEX_PAGE_ID,
    })) as PageObjectResponse & {
      properties: {
        title: { title: Array<{ plain_text: string[] }> };
      };
    },
    await notion.blocks.children.list({
      block_id: process.env.INDEX_PAGE_ID,
    }),
  ]);

  return {
    pageMeta,
    pageTitle: pageMeta.properties.title.title[0].plain_text,
    blocks,
  };
};
