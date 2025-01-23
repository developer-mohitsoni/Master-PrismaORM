import Link from "next/link";
import { prisma } from "../db/prisma";
import { Post } from "@/types";

const PostPage = async () => {
  const posts = await prisma.post.findMany({
    where: {
      title: {
        contains: "GL",
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      slug: true,
      content: true,
    },
    take: 1,
    skip: 1,
  });

  const postCount = await prisma.post.count();
  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">All Posts ({`${postCount}`})</h1>

      <ul className="border-t border-b border-black/10 py-5 leading-8">
        {posts.map((post: Post) => (
          <li key={post.id} className="flex items-center justify-between px-5">
            <Link href={`posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PostPage;
