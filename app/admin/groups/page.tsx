import { fetchGroups } from '@/app/lib/data'
import { DataTable } from './data-table'
import { Group, columns } from "./columns"


export default async function Groups() {
  const groups = await fetchGroups()

  if (!groups || groups.length === 0) {
    return <p className="mt-4 text-gray-400">Нет информации о группах.</p>;
  }
  
  return (
    <>
      <div className='relative overflow-x-auto sm:rounded-lg mt-4'>
        <DataTable columns={columns} data={groups} />
      </div>
    </>
  );
}
