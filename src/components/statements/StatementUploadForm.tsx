"use client";
import { uploadStatementAction } from "@/server/actions/uploadStatement";
import { Loader } from "../Loader";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const StatementUploadForm = () => {
  return (
    <div className="flex flex-col gap-2">
      <Input name="csvData" type="file" required />
      <Button
        onClick={async () => {
          const {} = await uploadStatementAction({
            csvData:
          });
        }}
        disabled={pending}
        type="submit"
      >
        {pending ? <Loader /> : "Upload CSV"}
      </Button>
    </div>
  );
};
