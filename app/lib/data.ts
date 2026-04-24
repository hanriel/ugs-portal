import { getSession, useSession } from "next-auth/react";
import { Group } from "../(admin)/admin/groups/columns"
import { Student } from "../(admin)/admin/students/columns"
import { Teacher } from "../(admin)/admin/teachers/columns"
import { Branch } from "../(admin)/admin/branches/columns"
import { auth } from "@/auth";

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
    const res = await fetchWithAuth('/users/teachers', {cache: 'no-store'})
    return res.json()
}

export async function fetchStudents(params: {
    page: number;
    search: string;
    sortBy: string;
    sortOrder: string;
}) {
    const session = await auth();
    if (!session?.accessToken) throw new Error('Unauthorized');

    const query = new URLSearchParams({
        page: String(params.page),
        limit: '40',
        search: params.search,
        sortBy: params.sortBy,
        sortOrder: params.sortOrder,
    }).toString();

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/students?${query}`, {
        headers: { Authorization: `Bearer ${session.accessToken}` },
        cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch students');
    return res.json(); // ожидается { data: Student[], totalPages: number }
}

const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const session = await getSession();
  return fetch(process.env.NEXT_PUBLIC_BACKEND_URL + url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
};