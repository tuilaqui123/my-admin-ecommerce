"use client"

import { Badge, BadgeProps } from "@/components/Badge"
import { Checkbox } from "@/components/Checkbox"
import { statuses } from "@/data/data"
import { Usage } from "@/data/schema"
import { formatters } from "@/lib/utils"
import {
  Column,
  ColumnDef,
  createColumnHelper,
  Row,
  Table,
} from "@tanstack/react-table"
import { DataTableColumnHeader } from "./DataTableColumnHeader"
import { ConditionFilter } from "./DataTableFilter"
import { DataTableRowActions } from "./DataTableRowActions"

const columnHelper = createColumnHelper<Usage>()

export const columns = [
  columnHelper.display({
    id: "select",
    header: ({ table }: { table: Table<Usage> }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected()
            ? true
            : table.getIsSomeRowsSelected()
              ? "indeterminate"
              : false
        }
        onCheckedChange={() => table.toggleAllPageRowsSelected()}
        className="translate-y-0.5"
        aria-label="Select all"
      />
    ),
    cell: ({ row }: { row: Row<Usage> }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={() => row.toggleSelected()}
        className="translate-y-0.5"
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    meta: {
      displayName: "Select",
    },
  }),
  // columnHelper.accessor("owner", {
  //   header: ({ column }: { column: Column<Usage> }) => (
  //     <DataTableColumnHeader column={column} title="Owner" />
  //   ),
  //   enableSorting: true,
  //   enableHiding: false,
  //   meta: {
  //     className: "text-left",
  //     displayName: "Owner",
  //   },
  // }),
  columnHelper.accessor("name", {
    header: ({ column }: { column: Column<Usage> }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    enableSorting: true,
    enableHiding: true,
    meta: {
      className: "text-left",
      displayName: "Name",
    },
    // cell: ({ row }: { row: Row<Usage> }) => {
    //   const name = row.getValue("name") as string

    //   return <Link href={"/products/overview"}>{name}</Link>
    // },
  }),
  columnHelper.accessor("status", {
    header: ({ column }: { column: Column<Usage> }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Status",
    },
    cell: ({ row }: { row: Row<Usage> }) => {
      const status = statuses.find(
        (item) => item.value === row.getValue("status"),
      )

      if (!status) {
        return null
      }

      return (
        <Badge variant={status.variant as BadgeProps["variant"]}>
          {status.label}
        </Badge>
      )
    },
  }),
  columnHelper.accessor("costs", {
    header: ({ column }: { column: Column<Usage> }) => (
      <DataTableColumnHeader column={column} title="Costs" />
    ),
    enableSorting: true,
    meta: {
      className: "text-right",
      displayName: "Costs",
    },
    cell: ({ getValue }) => {
      return (
        <span className="font-medium">{formatters.currency(getValue())}</span>
      )
    },
    filterFn: (
      row: Row<Usage>,
      columnId: string,
      filterValue: ConditionFilter,
    ) => {
      const value = row.getValue(columnId) as number
      const [min, max] = filterValue.value as [number, number]

      switch (filterValue.condition) {
        case "is-equal-to":
          return value == min
        case "is-between":
          return value >= min && value <= max
        case "is-greater-than":
          return value > min
        case "is-less-than":
          return value < min
        default:
          return true
      }
    },
  }),
  columnHelper.accessor("price", {
    header: ({ column }: { column: Column<Usage> }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    enableSorting: true,
    meta: {
      className: "text-right",
      displayName: "Price",
    },
    cell: ({ getValue }) => {
      return (
        <span className="font-medium">{formatters.currency(getValue())}</span>
      )
    },
    filterFn: (
      row: Row<Usage>,
      columnId: string,
      filterValue: ConditionFilter,
    ) => {
      const value = row.getValue(columnId) as number
      const [min, max] = filterValue.value as [number, number]

      switch (filterValue.condition) {
        case "is-equal-to":
          return value == min
        case "is-between":
          return value >= min && value <= max
        case "is-greater-than":
          return value > min
        case "is-less-than":
          return value < min
        default:
          return true
      }
    },
  }),
  columnHelper.accessor("revenue", {
    header: ({ column }: { column: Column<Usage> }) => (
      <DataTableColumnHeader column={column} title="Revenue" />
    ),
    enableSorting: true,
    meta: {
      className: "text-right",
      displayName: "Revenue",
    },
    cell: ({ getValue }) => {
      return (
        <span className="font-medium">{formatters.currency(getValue())}</span>
      )
    },
    filterFn: (
      row: Row<Usage>,
      columnId: string,
      filterValue: ConditionFilter,
    ) => {
      const value = row.getValue(columnId) as number
      const [min, max] = filterValue.value as [number, number]

      switch (filterValue.condition) {
        case "is-equal-to":
          return value == min
        case "is-between":
          return value >= min && value <= max
        case "is-greater-than":
          return value > min
        case "is-less-than":
          return value < min
        default:
          return true
      }
    },
  }),
  columnHelper.accessor("lastEdited", {
    header: ({ column }: { column: Column<Usage> }) => (
      <DataTableColumnHeader column={column} title="Last edited" />
    ),
    enableSorting: false,
    meta: {
      className: "tabular-nums",
      displayName: "Last edited",
    },
  }),
  columnHelper.display({
    id: "edit",
    header: "Edit",
    enableSorting: false,
    enableHiding: false,
    meta: {
      className: "text-right",
      displayName: "Edit",
    },
    cell: ({ row }: { row: Row<Usage> }) => <DataTableRowActions row={row} />,
  }),
] as ColumnDef<Usage>[]
