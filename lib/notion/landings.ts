import { notion } from "@/lib/notion/client"
import { LandingsDatabaseResult } from "@/lib/notion/types";

export const getLanding = async (slug: string) => {
  const page = await notion.databases.query({
    database_id: process.env.NOTION_PAGE_DB_ID,
    filter: { property: "Slug", rich_text: { equals: slug } },
  })

  const pageId = page.results[0].id

  const blocks = await notion.blocks.children.list({
    block_id: pageId
  })


  return { page, blocks }

}

export const getAllLandings = async () => {
  const pages = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DB_ID,

  })

  const results = pages.results as unknown as LandingsDatabaseResult;

  return results

}