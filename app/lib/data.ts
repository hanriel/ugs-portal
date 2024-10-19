import { Group } from "../admin/groups/columns"
import { Student } from "../admin/students/columns"
import { Teacher } from "../admin/teachers/columns"

export async function fetchGroups(): Promise<Group[]> {
    const res = await fetch(process.env.API_HOST + `/groups`, {cache: 'no-store'})
    return res.json()
}

export async function fetchTeachers(): Promise<Teacher[]> {
    const res = await fetch(process.env.API_HOST + `/users/teachers`, {cache: 'no-store'})
    return res.json()
}

export async function fetchStudents(): Promise<Student[]> {
    const res = await fetch(process.env.API_HOST + `/users/students`, {cache: 'no-store'})
    return res.json()
}