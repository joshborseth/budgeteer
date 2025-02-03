import { BreadCrumbs } from "@/components/BreadCrumbs";
import { Lists, ListsSkeleton } from "@/components/Lists";
import { ContentWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import { Plus } from "lucide-react";
import { Suspense } from "react";

export default async function Page() {
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
        <Suspense fallback={<ListsSkeleton />}>
          <Lists />
        </Suspense>
      </ContentWrapper>
    </>
  );
}
