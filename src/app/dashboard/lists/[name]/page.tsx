import { BreadCrumbs } from "@/components/BreadCrumbs";
import { ContentWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TypographyH2, TypographyP } from "@/components/ui/typography";
import { ROUTES } from "@/lib/routes";
import { Plus } from "lucide-react";

export default function Page({ params }: { params: { name: string } }) {
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
            <TypographyH2 className="text-2xl">List</TypographyH2>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-48 w-full">
              <table className="w-full">
                <tbody>
                  <tr className="border-b last:border-b-0">
                    <td className="py-2 text-muted-foreground line-through">
                      <TypographyP>Item 1</TypographyP>
                    </td>
                  </tr>
                  <tr className="border-b last:border-b-0">
                    <td className="py-2">
                      <TypographyP>Item 2</TypographyP>
                    </td>
                  </tr>
                  <tr className="border-b last:border-b-0">
                    <td className="py-2">
                      <TypographyP>Item 3</TypographyP>
                    </td>
                  </tr>
                </tbody>
              </table>
            </ScrollArea>
          </CardContent>
        </Card>
      </ContentWrapper>
    </>
  );
}
