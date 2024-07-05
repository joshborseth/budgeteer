"use client";

import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<{
  name: string;
  price: number;
  date: string;
}>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
];
