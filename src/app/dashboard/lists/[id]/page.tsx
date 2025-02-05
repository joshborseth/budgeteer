import { BreadCrumbs } from "@/components/BreadCrumbs";

import { GridLayout } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TypographyH2 } from "@/components/ui/typography";
import { ROUTES } from "@/lib/routes";
import { Plus } from "lucide-react";
import { notFound } from "next/navigation";
import { z } from "zod";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const safeParams = z.object({ id: z.coerce.number() }).safeParse(params);
  if (!safeParams.success) return notFound();
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
      <GridLayout>
        <Card className="shadow-lg">
          <CardHeader className="pb-2">
            <TypographyH2 className="text-2xl">{params.id}</TypographyH2>
          </CardHeader>
          <CardContent>{params.id} list items</CardContent>
        </Card>
      </GridLayout>
    </>
  );
}
