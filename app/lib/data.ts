// app/lib/data.ts
import { auth } from "@/auth";
import { Group } from "../(admin)/admin/groups/columns";
import { Student } from "../(admin)/admin/students/columns";
import { Teacher } from "../(admin)/admin/teachers/columns";
import { Branch } from "../(admin)/admin/branches/columns";

// ------------------------------------------------------------------
//  Универсальная fetch-функция
// ------------------------------------------------------------------
async function serverFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const session = await auth();
  if (!session?.accessToken) {
    throw new Error("Unauthorized");
  }

  const url = `${process.env.BACKEND_URL}${endpoint}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${session.accessToken}`,
    },
    cache: options?.cache || "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.statusText}`);
  }
  return res.json();
}

// ------------------------------------------------------------------
//  Конкретные функции
// ------------------------------------------------------------------
export async function fetchBranches(): Promise<Branch[]> {
  return serverFetch<Branch[]>("/branches");
}

export async function fetchSpecialties(): Promise<Branch[]> {
  return serverFetch<Branch[]>("/specialties");
}

export async function fetchGroups(): Promise<Group[]> {
  return serverFetch<Group[]>("/groups");
}

export async function fetchTeachers(): Promise<Teacher[]> {
  return serverFetch<Teacher[]>("/users/teachers");
}

export async function fetchStudents(params: {
  page: number;
  search: string;
  sortBy: string;
  sortOrder: string;
}) {
  const query = new URLSearchParams({
    page: String(params.page),
    limit: "40",
    search: params.search,
    sortBy: params.sortBy,
    sortOrder: params.sortOrder,
  }).toString();

  // Используем ту же универсальную функцию
  return serverFetch<{ data: Student[]; totalPages: number }>(
    `/users/students?${query}`
  );
}