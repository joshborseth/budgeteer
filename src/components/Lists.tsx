import { ListItemsInner, SkeletonListItems } from "@/components/ListItems";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { TypographyH2 } from "@/components/ui/typography";
import { ROUTES } from "@/lib/routes";
import { getLists } from "@/server/queries";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
export const Lists = async () => {
  const lists = await getLists();
  return (
    <>
      {lists.map((list) => (
        <Card className="shadow-lg" key={list.id}>
          <CardHeader className="pb-2">
            <TypographyH2 className="text-2xl">{list.name}</TypographyH2>
          </CardHeader>
          <CardContent>
            <ListItemsInner items={list.items} />
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
    </>
  );
};

export const ListsSkeleton = () => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <Card className="shadow-lg" key={index}>
          <CardHeader className="pb-2">
            <Skeleton className="h-12 w-full" />
          </CardHeader>
          <CardContent>
            <SkeletonListItems />
          </CardContent>
          <CardFooter>
            <Skeleton className="h-12 w-full" />
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
