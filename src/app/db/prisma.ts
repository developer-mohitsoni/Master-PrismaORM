// lib/prisma.ts
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { withOptimize } from "@prisma/extension-optimize";
import { withPulse } from "@prisma/extension-pulse/node";

export const prisma = new PrismaClient()
  .$extends(withOptimize({ apiKey: process.env.OPTIMIZE_API_KEY as string }))
  .$extends(withAccelerate())
  .$extends(
    withPulse({
      apiKey: process.env.PULSE_API_KEY as string,
    })
  );
