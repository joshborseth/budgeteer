import { BreadCrumbs } from "@/components/BreadCrumbs";
import { ContentWrapper } from "@/components/PageWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TypographyH2, TypographyP } from "@/components/ui/typography";
import { ROUTES } from "@/lib/routes";
import { Plus } from "lucide-react";
import Link from "next/link";

const groceryLists = [
  {
    id: 1,
    name: "Weekly Essentials",
    items: [
      { name: "Milk", completed: false },
      { name: "Bread", completed: true },
      { name: "Eggs", completed: false },
      { name: "Cheese", completed: true },
      { name: "Vegetables", completed: false },
    ],
  },
  {
    id: 2,
    name: "Party Supplies",
    items: [
      { name: "Chips", completed: false },
      { name: "Soda", completed: true },
      { name: "Dip", completed: false },
      { name: "Paper plates", completed: false },
      { name: "Napkins", completed: true },
    ],
  },
  {
    id: 3,
    name: "Healthy Snacks",
    items: [
      { name: "Almonds", completed: true },
      { name: "Greek yogurt", completed: false },
      { name: "Apples", completed: true },
      { name: "Carrots", completed: false },
      { name: "Hummus", completed: false },
    ],
  },
];

export default function Page() {
  const sortedGroceryLists = groceryLists.map((list) => ({
    ...list,
    items: [
      ...list.items.filter((item) => !item.completed),
      ...list.items.filter((item) => item.completed),
    ],
  }));
  return (
    <>
      <BreadCrumbs
        activePage="Lists"
        trail={[ROUTES.dashboard]}
        actions={
          <Button size="icon">
            <Plus />
          </Button>
        }
      />
      <ContentWrapper>
        {sortedGroceryLists.map((list) => (
          <Card className="shadow-lg" key={list.id}>
            <CardHeader className="pb-2">
              <TypographyH2 className="text-2xl">{list.name}</TypographyH2>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-48 w-full">
                <table className="w-full">
                  <tbody>
                    {list.items.map((item, index) => (
                      <tr key={index} className="border-b last:border-b-0">
                        <td
                          className={`py-2 ${item.completed ? "text-muted-foreground line-through" : ""}`}
                        >
                          <TypographyP>{item.name}</TypographyP>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <Link
                className={buttonVariants({
                  variant: "secondary",
                  className: "w-full",
                })}
                href={`${ROUTES.lists.href}/${list.name}`}
              >
                Edit
              </Link>
            </CardFooter>
          </Card>
        ))}
      </ContentWrapper>
    </>
  );
}
