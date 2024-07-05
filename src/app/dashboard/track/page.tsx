import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Page() {
  return (
    <main className="grid h-full flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <DataTable
          columns={columns}
          data={[
            {
              name: "Item 1",
              price: 100,
              date: "2023-01-01",
            },
          ]}
        />
        <div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"></div>
      </div>
    </main>
  );
}
