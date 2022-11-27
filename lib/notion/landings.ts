import { notion } from "@/lib/notion/client"
import { LandingsDatabaseResult, LandingsProperties } from "@/lib/notion/types";
import { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";

export const getLanding = async (slug = "home") => {
  const page = await notion.databases.query({
    database_id: process.env.NOTION_PAGE_DB_ID,
    filter: { property: "Slug", rich_text: { equals: slug } },
  })

  if (!page.results[0]) {
    throw new Error("No page found for", { cause: { slug, page } })
  }

  const pageId = page.results[0].id

  const [blocks, pageMeta] = await Promise.all([await notion.blocks.children.list({
    block_id: pageId
  }),
  await notion.pages.retrieve({
    page_id: pageId
  }) as unknown as GetPageResponse & {
    properties: LandingsProperties
  }
  ])


  return { page, blocks, pageMeta }

}

export const getAllLandings = async () => {
  const pages = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DB_ID,
    filter: { property: "Status", status: { equals: "Posted" } },
  })

  return pages.results as unknown as LandingsDatabaseResult;

}