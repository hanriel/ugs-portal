'use client'

import { fetchGroups } from '@/app/lib/data'
import { DataTable } from './data-table'
import { Group, columns } from "./columns"
import { useState, useEffect } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export default function Groups() {
  const [groups, setGroups] = useState<Group[]>([])

  useEffect(() => {
    const loadGroups = async () => {
      const fetchedGroups = await fetchGroups()
      setGroups(fetchedGroups || [])
    }
    loadGroups()
  }, [])

  const handleAction = (action: string) => {
    switch (action) {
      case 'create':
        // Реализовать создание группы
        console.log('Создать группу')
        break
      case 'bulk-edit':
        // Реализовать массовое редактирование
        console.log('Массовое редактирование')
        break
      case 'export':
        // Реализовать экспорт
        console.log('Экспорт')
        break
      case 'import':
        // Реализовать импорт
        console.log('Импорт')
        break
    }
  }

  if (!groups || groups.length === 0) {
    return <p className="mt-4 text-gray-400">Нет информации о группах.</p>;
  }
  
  return (
    <>
      <div className="flex justify-between items-center mb-4 mt-4">
        <h2 className="text-lg font-bold">Группы</h2>
        <div className="flex gap-2">
          <Button
            onClick={() => handleAction('create')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Создать группу
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-8 w-8 p-0">
                <span className="sr-only">Открыть меню</span>
                <HamburgerMenuIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleAction('create')}>
                Создать группу
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleAction('bulk-edit')}>
                Массовое редактирование
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleAction('export')}>
                Экспорт
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleAction('import')}>
                Импорт
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className='relative overflow-x-auto sm:rounded-lg mt-4'>
        <DataTable columns={columns} data={groups} />
      </div>
    </>
  );
}
