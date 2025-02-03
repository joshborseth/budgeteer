import { ScrollArea } from "@/components/ui/scroll-area";
import { TypographyP } from "@/components/ui/typography";
import { getListByName } from "@/server/queries";
import { InferSelectModel } from "drizzle-orm";
import { listItem } from "../server/db/schema";
import { Skeleton } from "./ui/skeleton";

export const ListItemsInner = async ({
  items,
}: {
  items: InferSelectModel<typeof listItem>[];
}) => {
  return (
    <ScrollArea className="h-48 w-full">
      <table className="w-full">
        <tbody>
          {items.map((item, index) => (
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
  );
};

export const ListItemsOuter = async ({ name }: { name: string }) => {
  const list = await getListByName(name);
  return <ListItemsInner items={list.items} />;
};

export const SkeletonListItems = () => {
  return (
    <table className="w-full">
      <tbody>
        {Array.from({ length: 3 }).map((_, index) => (
          <tr key={index} className="border-b last:border-b-0">
            <td className="h-11 py-2">
              <Skeleton className="h-full w-full" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
