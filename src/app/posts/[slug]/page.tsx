import { prisma } from "@/app/db/prisma";
import { unstable_cache as cache } from "next/cache";

interface Params {
  slug: string;
}

const getCachedPost = cache((slug: string) => {
  return prisma.post.findUnique({
    where: {
      slug,
    },
  });
});

const PostPage = async ({ params }: { params: Params }) => {
  const { slug } = await params; // Awaiting params
  const post = await getCachedPost(slug);
  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">{post?.title}</h1>

      <p>{post?.content}</p>
    </main>
  );
};

export default PostPage;
