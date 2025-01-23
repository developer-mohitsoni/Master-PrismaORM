import Link from "next/link";
import { prisma } from "../db/prisma";

interface Post {
  id: string;
  title: string;
  content: string;
}

const PostPage = async () => {
  const posts = await prisma.post.findMany();
  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">All Posts (0)</h1>

      <ul className="border-t border-b border-black/10 py-5 leading-8">
        {posts.map((post: Post) => (
          <li key={post.id} className="flex items-center justify-between px-5">
            <Link href={`posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PostPage;
