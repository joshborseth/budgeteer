import { db } from "@/server/db";
import { statement } from "@/server/db/schema";
import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UTApi } from "uploadthing/server";
const f = createUploadthing();

export const utapi = new UTApi();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  uploadStatement: f({ "text/csv": { maxFileSize: "1MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(() => {
      // This code runs on your server before upload
      const { userId } = auth();
      if (!userId) throw new Error("Unauthorized");
      // If you throw, the user will not be able to upload
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      await db.insert(statement).values({
        label: file.name,
        url: file.url,
        userId: metadata.userId,
      });
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
