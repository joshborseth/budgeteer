"use client";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { uploadStatementAction } from "@/server/actions/uploadStatement";
import { type DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { parse } from "papaparse";
import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { Loader } from "../Loader";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Table, TableCell, TableHeader, TableRow } from "../ui/table";
import { TypographyP } from "../ui/typography";

type CSVFileData = string[][] | null;

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
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<CSVFileData>(null);
  const resetInput = () => fileInput.current?.form?.reset();
  return (
    <>
      <input
        type="file"
        name="csvData"
        onChange={async (e) => {
          setOpen(!!e.target.files?.length);
          const file = e.target.files?.[0];
          if (!file) {
            setFile(null);
            return;
          }
          const text = await file.text();
          const { data } = parse<string[]>(text, {
            skipEmptyLines: true,
          });
          setFile(data);
        }}
        ref={fileInput}
        hidden
      />

      <ColumnNameForm
        open={open}
        setOpen={setOpen}
        file={file}
        resetInput={resetInput}
      />

      <Button
        disabled={pending}
        onClick={() => fileInput.current?.click()}
        className="w-full"
        type="button"
      >
        {pending ? <Loader /> : "Upload CSV"}
      </Button>
    </>
  );
};

export const ColumnNameForm = ({
  open,
  setOpen,
  resetInput,
  file,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  resetInput: () => void;
  file: CSVFileData;
}) => {
  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        //reset input on close so that if the user tries to upload again, it will be empty and trigger onChange event
        if (!open) resetInput();
      }}
    >
      <DialogContent className="p-2">
        <div className="flex flex-col gap-4 p-4">
          <DialogHeader>
            <DialogTitle>Edit Column Titles</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Match each label with the correct column of data.
          </DialogDescription>
          <Button>Save</Button>
        </div>
        {file?.length ? (
          <div className="h-80 overflow-x-auto overflow-y-auto">
            <Table>
              <TableHeader>
                {Array.from({ length: file[0]?.length ?? 0 }).map((_col, i) => {
                  return (
                    <TableCell key={i}>
                      <ColumnPicker />
                    </TableCell>
                  );
                })}
              </TableHeader>
              {file.map((row, i) => (
                <TableRow key={i}>
                  {row.map((col) => (
                    <TableCell key={col}>
                      <TypographyP className="text-xs">{col}</TypographyP>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </Table>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

type Checked = DropdownMenuCheckboxItemProps["checked"];

export const ColumnPicker = () => {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  const [showPanel, setShowPanel] = useState<Checked>(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-5 w-5">
          <ChevronDownIcon size={10} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
