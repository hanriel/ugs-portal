import { fetchStudents } from '@/app/lib/data'
import { StudentsTable } from './students-table'
import { columns } from "./columns"
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

interface SearchParams {
  page?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export default async function StudentsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {

  const params = await searchParams;
  const page = Number(params.page) || 1;
  const search = params.search || '';
  const sortBy = params.sortBy || '';
  const sortOrder = params.sortOrder || 'asc';

  const result = await fetchStudents({ page, search, sortBy, sortOrder });

  const students = result?.data ?? [];
  const totalPages = result?.totalPages ?? 1;

  // const handleAction = (action: string) => {
  //   switch (action) {
  //     case 'create':
  //       // Реализовать создание отделения
  //       console.log('Создать группу')
  //       break
  //     case 'bulk-edit':
  //       // Реализовать массовое редактирование отделений
  //       console.log('Массовое редактирование')
  //       break
  //     case 'export':
  //       // Реализовать экспорт отделений
  //       console.log('Экспорт')
  //       break
  //     case 'import':
  //       // Реализовать импорт отделений
  //       console.log('Импорт')
  //       break
  //   }
  // } 

  return (
    <>
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-lg font-bold">Студенты</h2>
        <div className="flex gap-2">
          <Button
            // onClick={() => handleAction('create')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Создать студента
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-8 w-8 p-0">
                <span className="sr-only">Открыть меню</span>
                <HamburgerMenuIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
              // onClick={() => handleAction('export')}
              >
                Экспорт
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className='relative overflow-x-auto sm:rounded-lg'>
        <Suspense fallback={<div>Зашгрузка таблицы...</div>}>
          <StudentsTable
            columns={columns}
            initialData={students}
            totalPages={totalPages}
            currentPage={page}
            currentSearch={search}
            currentSortBy={sortBy}
            currentSortOrder={sortOrder}
          />
        </Suspense>
      </div>
    </>
  );
}
