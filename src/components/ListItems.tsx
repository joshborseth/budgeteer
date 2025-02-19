import { TypographyP } from "@/components/ui/typography";
import { type InferSelectModel } from "drizzle-orm";
import { type listItem } from "../server/db/schema";
import { ScrollArea } from "./ui/scroll-area";
import { Skeleton } from "./ui/skeleton";

export const PreviewListItems = async ({
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

export const PreviewListItemsSkeleton = () => {
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
