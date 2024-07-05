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
    name: "DoorDash",
    description: "Gians Indian Restaurant",
    price: 100,
  },
  {
    id: 2,
    name: "Amazon",
    description: "Critter Crunch",
    price: 55,
  },
  {
    id: 3,
    name: "Epic Games",
    description: "V Bucks",
    price: 1000,
  },
];

export const RecentExpenses = async () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80 pr-5">
          <ul className="flex flex-col gap-4 py-2">
            {[...items, ...items, ...items, ...items, ...items, ...items].map(
              (item, i) => (
                <li
                  className="flex w-full list-disc items-center justify-between"
                  key={i}
                >
                  <div className="flex items-center justify-center gap-4">
                    <div>
                      <TypographyP className="text-sm font-medium">
                        {item.name}
                      </TypographyP>
                      <TypographyP className="text-xs text-muted-foreground">
                        {item.description}
                      </TypographyP>
                    </div>
                  </div>
                  <TypographyP>${item.price}</TypographyP>
                </li>
              ),
            )}
          </ul>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <Link className="w-full" href={ROUTES.track}>
          <Button className="flex w-full gap-1" size="sm" variant="secondary">
            View All <ArrowUpRightIcon className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
