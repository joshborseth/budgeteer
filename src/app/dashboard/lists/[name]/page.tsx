import { BreadCrumbs } from "@/components/BreadCrumbs";
import { ListItemsOuter, SkeletonListItems } from "@/components/ListItems";
import { ContentWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TypographyH2 } from "@/components/ui/typography";
import { ROUTES } from "@/lib/routes";
import { Plus } from "lucide-react";
import { Suspense } from "react";

export default async function Page(props: {
  params: Promise<{ name: string }>;
}) {
  const params = await props.params;
  const decodedName = decodeURIComponent(params.name);
  return (
    <>
      <BreadCrumbs
        activePage={decodedName}
        trail={[ROUTES.dashboard, ROUTES.lists]}
        actions={
          <Button size="icon">
            <Plus />
          </Button>
        }
      />
      <ContentWrapper>
        <Card className="shadow-lg">
          <CardHeader className="pb-2">
            <TypographyH2 className="text-2xl">{decodedName}</TypographyH2>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<SkeletonListItems />}>
              <ListItemsOuter name={decodedName} />
            </Suspense>
          </CardContent>
        </Card>
      </ContentWrapper>
    </>
  );
}
