"use client"
 
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import { ColumnDef } from "@tanstack/react-table"

export type Group = {
  id: number
  label: string
  labelRU: string
  curator: {
    id: number
    first_name: string
    last_name: string
    middle_name: string
  }
  studentCount: number
}
 
export const columns: ColumnDef<Group>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "labelRU",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Группа
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue("labelRU")}</div>,
  }, 
  {
    accessorKey: "curator",
    header: "Куратор",
    cell: ({ row }) => <div>{row.original.curator?.first_name ? row.original.curator?.first_name + ' ' + row.original.curator?.last_name + ' ' + row.original.curator.middle_name : "Не указан"}</div>
  },
  {
    accessorKey: "students",
    header: "Количество человек",
    cell: ({ row }) => <div>{row.original.studentCount}</div>
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const group = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Действия</DropdownMenuLabel>
            <DropdownMenuItem>Редактировать</DropdownMenuItem>
            <DropdownMenuItem>Удалить</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]