import { notion } from './client'
// import { HOME_PAGE_ID } from '../lib/constants'

export const getHomePage = async () => {
  const [pageMeta, blocks] = await Promise.all([
    await notion.pages.retrieve({
      page_id: process.env.INDEX_PAGE_ID,
    }),
    await notion.blocks.children.list({
      block_id: process.env.INDEX_PAGE_ID,
    }),
  ])

  return { pageMeta, blocks }
}
