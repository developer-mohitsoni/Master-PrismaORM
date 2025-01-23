import { posts } from "../src/app/utils/post";
import { prisma } from "../src/app/db/prisma";

async function main() {
  try {
    for (const post of posts) {
      const newPost = await prisma.post.create({
        data: post,
      });
      console.log(`Created post with ID: ${newPost.id}`);
    }
    console.log("Posts seeded successfully.");
  } catch (error) {
    console.error("Error seeding posts:", error);
    process.exit(1); // Exit with an error code
  } finally {
    // Ensure the Prisma client is disconnected
    await prisma.$disconnect();
  }
}

// Execute the main function
main();
