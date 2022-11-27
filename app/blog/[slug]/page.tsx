import { getPost } from "@/lib/notion";
import { BlocksRenderer } from "@/components/blocks/BlocksRenderer";

export const revalidate = 1;

export default async function Page({ params }) {
  const post = await getPost(params.slug);

  return (
    <>
      <pre>{JSON.stringify(post.blocks, null, 2)}</pre>
      {/* <BlocksRenderer blocks={post.blocks} /> */}
    </>
  );
}
