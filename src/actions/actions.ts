"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../app/db/prisma";
import { Prisma } from "@prisma/client";

export async function createPost(formData: FormData) {
  try {
    await prisma.post.create({
      data: {
        title: formData.get("title") as string,
        content: formData.get("content") as string,
        slug: (formData.get("title") as string)
          .replace(/\s+/g, "-")
          .toLowerCase(),
        author: {
          connect: {
            email: "john@example.com",
          },
        },
      },
    });

    // invalidate the prisma cache
    await prisma.$accelerate.invalidate({
      tags: ["posts"],
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        console.log(
          "There is a unique constraint violation, a new user cannot be created with this email."
        );
      }
    }
  }
  revalidatePath("/posts");
}

export async function editPost(formData: FormData, id: string) {
  await prisma.post.update({
    where: {
      id,
    },
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      slug: (formData.get("title") as string)
        .replace(/\s+/g, "-")
        .toLowerCase(),
    },
  });
}

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: {
      id,
    },
  });
}
