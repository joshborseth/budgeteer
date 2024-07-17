"use client";
import { UploadIcon } from "lucide-react";
import { Button } from "../ui/button";

export const StatementUploadForm = ({ url }: { url: string }) => {
  console.log(url);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        //eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const file = (e.target as HTMLFormElement).file.files?.[0] as File;
        console.log(file);

        const image = await fetch(url, {
          body: file,
          method: "PUT",
          headers: {
            "Content-Type": file.type,
            "Content-Disposition": `attachment; filename="${file.name}"`,
          },
        });

        window.location.href = image.url.split("?")[0]!;
      }}
    >
      <input name="file" type="file" accept="text/csv" />
      <Button className="flex w-full gap-2" size="sm" variant="secondary">
        Upload <UploadIcon className="h-4 w-4" />
      </Button>
    </form>
  );
};
