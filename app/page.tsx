import Layout from '../components/layout'
import { getHomePage } from '../lib/getHomePage'
// import { NotionRenderer } from 'react-notion-x'

export default async function Page() {
  const blockMap = await getHomePage()

  console.log(blockMap)

  return (
    <Layout>
      {/* <NotionRenderer recordMap={blockMap} /> */}
      <pre>{JSON.stringify(blockMap, null, 2)}</pre>
    </Layout>
  )
}
