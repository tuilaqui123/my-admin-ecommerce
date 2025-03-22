"use client"
import { usage } from "@/data/data"
import { columns } from "../data-table/columns"
import { DataTable } from "../data-table/DataTable"

export default function Example() {
  return (
    <>
      <div className="mt-4 sm:mt-6 lg:mt-10">
        <DataTable data={usage} columns={columns} />
      </div>
    </>
  )
}
