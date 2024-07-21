"use client";
import { UploadButton } from "@/lib/uploadthing";
import { toast } from "sonner";

export const StatementUploadForm = () => {
  return (
    <UploadButton
      endpoint="uploadStatement"
      appearance={{
        button:
          "bg-primary focus-within:ring-primary ut-uploading:bg-primary ut-readying:bg-primary ut-ready:bg-primary after:bg-primary w-full",
        container: "w-full",
      }}
      onClientUploadComplete={() => {
        toast.success("File Uploaded");
      }}
      onUploadError={(error: Error) => {
        toast.error("Error Uploading File", { description: error.message });
      }}
    />
  );
};
