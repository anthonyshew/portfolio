import { Client } from '@notionhq/client'

export const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
})