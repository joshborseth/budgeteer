"use client";
import { getBudgeteerData } from "@/server/lib/getBudgeteerData";

export const Thing = () => {
  const data = getBudgeteerData();
  return <div>Thing</div>;
};
