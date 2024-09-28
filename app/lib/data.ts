import { Group } from "../admin/groups/columns"


export async function fetchGroups(): Promise<Group[]> {
    // const res = await fetch(`https://pmk-api.hanriel.ru/groups`, {cache: 'no-store'})
    const res = await fetch(process.env.API_HOST + `/groups`, {cache: 'no-store'})
    return res.json()
}