import { fetchTeachers } from '@/app/lib/data'
import { DataTable } from './data-table'
import { Teacher, columns } from "./columns"

export default async function Teachers() {
  const teachers = await fetchTeachers()

  if (!teachers || teachers.length === 0) {
    return <p className="mt-4 text-gray-400">Нет информации о преподавателях.</p>;
  }
  
  return (
    <>
      <div className='relative overflow-x-auto sm:rounded-lg mt-4'>
        <DataTable columns={columns} data={teachers} />
      </div>
    </>
  );
}
