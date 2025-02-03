export const ROUTES = {
  landing: {
    href: "/",
    label: "Home",
  },
  dashboard: {
    href: "/dashboard",
    label: "Dashboard",
  },
  lists: {
    href: "/dashboard/lists",
    label: "Lists",
  },
} as const;

export type ROUTE = (typeof ROUTES)[keyof typeof ROUTES];
