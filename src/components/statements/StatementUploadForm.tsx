import { uploadStatementAction } from "@/server/actions/uploadStatement";
import { Button } from "../ui/button";

export const StatementUploadForm = () => {
  return (
    <form action={uploadStatementAction}>
      <input type="file" accept=".csv" name="csvData" required />
      <Button type="submit">Upload</Button>
    </form>
  );
};
