import { ROUTES } from "@/lib/routes";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { TypographyP } from "./ui/typography";

const items = [
  {
    id: 1,
    name: "Costco",

    price: 200,
  },
  {
    id: 2,
    name: "Fresh Co.",
    price: 155,
  },
  {
    id: 3,
    name: "Walmart",
    price: 69,
  },
];

export const LastMonthExpenses = async () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Last Month Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64 pr-5">
          <ul className="flex flex-col gap-4 py-2">
            {[...items, ...items, ...items, ...items, ...items, ...items].map(
              (item, i) => (
                <li
                  className="flex w-full list-disc items-center justify-between"
                  key={i}
                >
                  <TypographyP className="text-sm font-medium">
                    {item.name}
                  </TypographyP>
                  <TypographyP>${item.price}</TypographyP>
                </li>
              ),
            )}
          </ul>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <Link className="w-full" href={ROUTES.lists.href}>
          <Button className="flex w-full gap-1" size="sm" variant="secondary">
            View All <ArrowUpRightIcon className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
