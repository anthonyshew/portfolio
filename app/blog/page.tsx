import { getAllPosts } from "@/lib/notion";
import Link from "next/link";

export const revalidate = 1;

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <>
      {posts.map((post) => {
        return (
          <Link
            href={
              "/blog/" +
              post.properties.Slug.rich_text.map((rte) => rte.plain_text).join()
            }
          >
            {post.properties.Title.title[0].plain_text}
          </Link>
        );
      })}
    </>
  );
}
