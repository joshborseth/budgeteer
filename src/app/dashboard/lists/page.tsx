import { BreadCrumbs } from "@/components/BreadCrumbs";
import { ContentWrapper } from "@/components/PageWrapper";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TypographyH2, TypographyP } from "@/components/ui/typography";
import { ROUTES } from "@/lib/routes";
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
      <BreadCrumbs activePage="Lists" trail={[ROUTES.dashboard]} />
      <ContentWrapper>
        {sortedGroceryLists.map((list) => (
          <Link
            className="group"
            href={`${ROUTES.lists.href}/${list.id}`}
            key={list.id}
          >
            <Card className="shadow-lg group-hover:bg-muted">
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
            </Card>
          </Link>
        ))}
      </ContentWrapper>
    </>
  );
}
