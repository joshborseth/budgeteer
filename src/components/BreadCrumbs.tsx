import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { type ROUTE } from "@/lib/routes";
import React from "react";

export const BreadCrumbs = ({
  trail,
  activePage,
  actions,
}: {
  trail: Array<ROUTE>;
  activePage: string;
  actions?: React.ReactNode;
}) => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {Boolean(trail.length) &&
              trail.map(({ href, label }, i) => (
                <React.Fragment key={i}>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                </React.Fragment>
              ))}
            <BreadcrumbItem>
              <BreadcrumbPage>{activePage}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {!!actions && actions}
    </header>
  );
};
