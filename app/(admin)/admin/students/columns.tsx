"use client"
 
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import { ColumnDef } from "@tanstack/react-table"

export type Student = {
  id: number
  last_name: string
  first_name: string
  middle_name: string
  email: string
  group: {
    label: string
    labelRU: string
  }
}
 
export const columns: ColumnDef<Student>[] = [
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
    id: 'fullName',
    accessorKey: 'last_name',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>ФИО<CaretSortIcon className="ml-2 h-4 w-4" /></Button>
      )
    },
    cell: ({ row }) => {
      const student = row.original;

      return(
        <>
        {`${student.last_name} ${student.first_name} ${student.middle_name ?? ''}`}
        </>
      )
    }
  },
  {
    accessorKey: "group.labelRU",
    header: "Группа",
    cell: ({ row }) => {
      const student = row.original;

      return (
        <>{student.group?.labelRU}</>
      )
    }
  },
  {
    accessorKey: "login",
    cell: ({ row }) => <div>{row.getValue("login")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const teacher = row.original
 
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
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(teacher.email)}
            >
              Скопировать ФИО
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Просмотреть</DropdownMenuItem>
            <DropdownMenuItem>Редактировать</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]