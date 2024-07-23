"use client";
import { uploadStatementAction } from "@/server/actions/uploadStatement";
import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { Loader } from "../Loader";
import { Button } from "../ui/button";

export const StatementUploadForm = () => {
  return (
    <form action={uploadStatementAction} className="w-full">
      <UploadFormInner />
    </form>
  );
};

const UploadFormInner = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const { pending } = useFormStatus();
  return (
    <>
      <input
        type="file"
        name="csvData"
        ref={fileInput}
        hidden
        onChange={(e) => {
          e.target.form?.requestSubmit();
          e.target.form?.reset();
        }}
      />
      <Button
        disabled={pending}
        className="w-full"
        type="button"
        onClick={() => fileInput.current?.click()}
      >
        {pending ? <Loader /> : "Upload CSV"}
      </Button>
    </>
  );
};
