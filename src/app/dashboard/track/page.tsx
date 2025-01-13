import { Statements } from "@/components/statements/Statements";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Page() {
  return (
    <>
      <div className="col-span-2">
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
      </div>
      <div className="max-h-fit">
        <Statements />
      </div>
    </>
  );
}
