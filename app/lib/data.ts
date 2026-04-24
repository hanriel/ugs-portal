import { getSession, useSession } from "next-auth/react";
import { Group } from "../(admin)/admin/groups/columns"
import { Student } from "../(admin)/admin/students/columns"
import { Teacher } from "../(admin)/admin/teachers/columns"
import { Branch } from "../(admin)/admin/branches/columns"

export async function fetchBranches(): Promise<Branch[]> {
    const res = await fetchWithAuth('/branches', { cache: 'no-store', });
    return res.json();
}

export async function fetchSpecialies(): Promise<Branch[]> {
    const res = await fetchWithAuth('/specialties', { cache: 'no-store', });
    return res.json();
}

export async function fetchGroups(): Promise<Group[]> {
    const res = await fetchWithAuth('/groups', { cache: 'no-store', });
    
    return res.json();
}

export async function fetchTeachers(): Promise<Teacher[]> {
    const res = await fetch('/users/teachers', {cache: 'no-store'})
    return res.json()
}

export async function fetchStudents(): Promise<Student[]> {
    const res = await fetch('/users/students', {cache: 'no-store'})
    return res.json()
}

const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const session = await getSession();
  console.log(session)
  return fetch(process.env.API_HOST + url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
};