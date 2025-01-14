"use client";

import { Badge } from "@/components/ui/badge";
import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{
  name: string;
  price: string;
  date: string;
}>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ getValue }) => {
      const val = getValue() as string;
      return <span>{val.slice(0, 10)}</span>;
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ getValue }) => {
      const val = getValue() as string;
      return (
        <Badge
          className="min-w-max text-xs"
          variant={val.startsWith("+") ? "success" : "destructive"}
        >
          {val}
        </Badge>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
];
