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

export const RecentExpenses = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80 pr-5">
          <ul className="flex flex-col gap-4 py-2">
            {[...items, ...items, ...items, ...items, ...items, ...items].map(
              (item) => (
                <li
                  className="flex w-full list-disc items-center justify-between"
                  key={item.id}
                >
                  <div className="flex items-center justify-center gap-4">
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
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
        <Button className="w-full" size="sm" variant="secondary">
          View All
        </Button>
      </CardFooter>
    </Card>
  );
};
