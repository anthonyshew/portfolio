import { notion } from "@/lib/notion/client"
import { BlogDatabaseResult } from "@/lib/notion/types";

export const getPost = async (slug: string) => {
  const post = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DB_ID,
    filter: { property: "Slug", rich_text: { equals: slug } },
  })

  const postId = post.results[0].id

  const blocks = await notion.blocks.children.list({
    block_id: postId
  })


  return { post, blocks }

}

export const getAllPosts = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DB_ID,

  })

  const results = posts.results as unknown as BlogDatabaseResult;

  return results

}