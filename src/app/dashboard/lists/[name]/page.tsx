import { BreadCrumbs } from "@/components/BreadCrumbs";

import { GridLayout } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TypographyH2 } from "@/components/ui/typography";
import { ROUTES } from "@/lib/routes";
import { Plus } from "lucide-react";

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
      <GridLayout>
        <Card className="shadow-lg">
          <CardHeader className="pb-2">
            <TypographyH2 className="text-2xl">{decodedName}</TypographyH2>
          </CardHeader>
          <CardContent>{decodedName} list items</CardContent>
        </Card>
      </GridLayout>
    </>
  );
}
