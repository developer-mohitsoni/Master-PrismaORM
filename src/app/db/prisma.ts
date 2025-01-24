// lib/prisma.ts
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { withOptimize } from "@prisma/extension-optimize";

export const prisma = new PrismaClient()
  .$extends(withOptimize({ apiKey: process.env.OPTIMIZE_API_KEY as string }))
  .$extends(withAccelerate());
