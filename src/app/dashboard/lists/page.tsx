import { BreadCrumbs } from "@/components/BreadCrumbs";
import { GridLayout } from "@/components/layouts";
import { PreviewLists, PreviewListsSkeleton } from "@/components/PreviewLists";
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
      <GridLayout>
        <Suspense fallback={<PreviewListsSkeleton />}>
          <PreviewLists />
        </Suspense>
      </GridLayout>
    </>
  );
}
