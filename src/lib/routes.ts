export const ROUTES = {
  landing: {
    href: "/",
    label: "Home",
  },
  dashboard: {
    href: "/dashboard",
    label: "Dashboard",
  },
  track: {
    href: "/dashboard/track",
    label: "Track",
  },
} as const;

export type ROUTE = (typeof ROUTES)[keyof typeof ROUTES];
