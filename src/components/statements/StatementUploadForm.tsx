"use client";
import { useServerActionMutation } from "@/lib/hooks/server-action-hooks";
import { uploadStatementAction } from "@/server/actions/uploadStatement";
import { useRef } from "react";
import { toast } from "sonner";
import { Loader } from "../Loader";
import { Button } from "../ui/button";

export const StatementUploadForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const mutation = useServerActionMutation(uploadStatementAction, {
    onSuccess: () => {
      toast.success("Statement uploaded successfully.");
    },
    onError: (err) => {
      console.log(err);
      toast.error("Error uploading statement.");
    },
    onSettled: () => {
      if (inputRef.current) inputRef.current.value = "";
    },
  });
  return (
    <div className="flex w-full flex-col gap-2">
      <input
        type="file"
        ref={inputRef}
        accept=".csv"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          const data = await file.text();
          mutation.mutate({ csvData: data, fileName: file.name });
        }}
        hidden
      />
      <Button
        disabled={mutation.isPending}
        onClick={() => inputRef.current?.click()}
        type="button"
      >
        {mutation.isPending ? <Loader /> : "Upload CSV"}
      </Button>
    </div>
  );
};
