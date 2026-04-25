import { fetchSpecialties } from '@/app/lib/data'
import { DataTable } from './data-table'
import { Speciality, columns } from "./columns"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export default async function SpecialiesPage() {
  
  const result = await fetchSpecialties();
  

  const handleAction = (action: string) => {
    switch (action) {
      case 'create':
        // Реализовать создание отделения
        console.log('Создать группу')
        break
      case 'bulk-edit':
        // Реализовать массовое редактирование отделений
        console.log('Массовое редактирование')
        break
      case 'export':
        // Реализовать экспорт отделений
        console.log('Экспорт')
        break
      case 'import':
        // Реализовать импорт отделений
        console.log('Импорт')
        break
    }
  }

  if (!result || result.length === 0) {
    return (
      <p className="mt-4 text-gray-400">Загрузка отдлеений...</p>
    );
  }
  
  return (
    <>
      <div className="flex justify-between items-center mb-4 mt-4">
        <h2 className="text-lg font-bold">Специальности</h2>
        <div className="flex gap-2">
          <Button
            onClick={() => handleAction('create')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Создать специальность
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-8 w-8 p-0">
                <span className="sr-only">Открыть меню</span>
                <HamburgerMenuIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleAction('export')}>
                Экспорт
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className='relative overflow-x-auto sm:rounded-lg mt-4'>
        <DataTable columns={columns} data={result} />
      </div>
    </>
  );
}
