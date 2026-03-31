import { useSession } from "next-auth/react";
import { Group } from "../(admin)/admin/groups/columns"
import { Student } from "../(admin)/admin/students/columns"
import { Teacher } from "../(admin)/admin/teachers/columns"

export async function fetchGroups(): Promise<Group[]> {
    const res = await fetch(`http://api.p87.pmkspo.ru/groups`, {
        cache: 'no-store',
    })
    return res.json()
}

export async function fetchTeachers(): Promise<Teacher[]> {
    const res = await fetch(`http://api.p87.pmkspo.ru/users/teachers`, {cache: 'no-store'})
    return res.json()
}

export async function fetchStudents(): Promise<Student[]> {
    const res = await fetch(`http://api.p87.pmkspo.ru/users/students`, {cache: 'no-store'})
    return res.json()
}