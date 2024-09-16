import { Group } from "../admin/groups/columns"


export async function fetchGroups(): Promise<Group[]> {
    // const res = await fetch(`https://pmk-api.hanriel.ru/groups`, {cache: 'no-store'})
    const res = await fetch(`http://localhost:7777/groups`, {cache: 'no-store'})
    return res.json()
}