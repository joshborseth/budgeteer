import { BreadCrumbs } from "@/components/BreadCrumbs";
import { ContentWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ROUTES } from "@/lib/routes";

const mockData = [
  {
    id: 1,
    name: "Weekly Essentials",
    items: ["Milk", "Bread", "Eggs", "Cheese", "Vegetables"],
  },
  {
    id: 2,
    name: "Party Supplies",
    items: ["Chips", "Soda", "Dip", "Paper plates", "Napkins"],
  },
  {
    id: 3,
    name: "Healthy Snacks",
    items: ["Almonds", "Greek yogurt", "Apples", "Carrots", "Hummus"],
  },
];

export default async function Page() {
  return (
    <>
      <BreadCrumbs activePage="Lists" trail={[ROUTES.dashboard]} />
      <ContentWrapper>
        {mockData.map((list) => (
          <Card key={list.id} className="shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{list.name}</CardTitle>
                <Button variant="secondary">Edit</Button>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2">
                {list.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </ContentWrapper>
    </>
  );
}
