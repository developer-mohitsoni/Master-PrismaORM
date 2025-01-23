import { posts } from "../src/app/utils/post";
import { prisma } from "../src/app/db/prisma";

async function main() {
  try {
    // Create a default user
    const user = await prisma.user.create({
      data: {
        email: "default.user@example.com",
        hashedPassword: "hashed_password_123", // Replace with an actual hash for production
      },
    });
    // Use Promise.all to execute all create operations concurrently
    await Promise.all(
      posts.map((post) =>
        prisma.post.create({
          data: {
            ...post,
            authorId: user.id,
          },
        })
      )
    );
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
