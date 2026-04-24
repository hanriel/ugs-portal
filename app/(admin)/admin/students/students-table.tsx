'use client'
 
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
 
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTable } from "./data-table";
 
interface StudentsTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  initialData: TData[];
  totalPages: number;
  currentPage: number;
  currentSearch: string;
  currentSortBy: string;
  currentSortOrder: 'asc' | 'desc';
}
 
export function StudentsTable<TData, TValue>({
  columns,
  initialData,
  totalPages,
  currentPage,
  currentSearch,
  currentSortBy,
  currentSortOrder,
}: StudentsTableProps<TData, TValue>) {
  const router = useRouter();
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const updateParams = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(window.location.search);
      Object.entries(updates).forEach(([key, value]) => {
        if (value) params.set(key, value);
        else params.delete(key);
      });
      router.push(`?${params.toString()}`);
    },
    [router]
  );

  // Пагинация
  const goToPage = (page: number) => updateParams({ page: String(page) });

  // Поиск
  const handleSearch = (term: string) => updateParams({ search: term, page: '1' });

  // Сортировка (можно вызывать из DataTable при клике на заголовок)
  const handleSort = (columnId: string) => {
    const newOrder = columnId === currentSortBy && currentSortOrder === 'asc' ? 'desc' : 'asc';
    updateParams({ sortBy: columnId, sortOrder: newOrder, page: '1' });
  };
 
  return (
    <div>
      <div className="flex items-center gap-2 py-4">
        <Input
          placeholder="Поиск по ФИО..."
          defaultValue={currentSearch}
          onChange={(e) => handleSearch(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <DataTable columns={columns} data={data} onSort={handleSort} />
      <div className="flex justify-center gap-2 mt-4">
        <Button
          variant="outline"
          disabled={currentPage <= 1}
          onClick={() => goToPage(currentPage - 1)}
        >
          Назад
        </Button>
        <span className="self-center">
          Страница {currentPage} из {totalPages}
        </span>
        <Button
          variant="outline"
          disabled={currentPage >= totalPages}
          onClick={() => goToPage(currentPage + 1)}
        >
          Вперёд
        </Button>
      </div>
    </div>
  );
}