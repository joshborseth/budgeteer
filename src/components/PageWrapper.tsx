export const ContentWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex w-full flex-col gap-4 p-4 lg:grid lg:grid-cols-3 xl:grid-cols-3">
    {children}
  </div>
);
