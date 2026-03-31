'use client';

import Brand from "@/components/brand";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';
import { useActionState } from "react";

export default function Login() {
  
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get('callbackUrl') || '/';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );


  return (
    <>
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <Brand/>
        <h2 className="text-lg font-bold self-center mr-6">Система авторизации</h2>
      </div>
      <form action={formAction} className="grid grid-cols-[1fr_1fr_1fry] gap-8">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
        <div className="">
          <label htmlFor="username" className="block text-sm font-medium leading-6">Логин</label>
          <input id="username" name="username" type="username" autoComplete="username" className="block w-full rounded-md bg-blue-500/10 border-blue-100 px-6 py-4 text-sm mt-2" required></input>
        </div>

        <div className="">
          <label htmlFor="password" className="block text-sm font-medium leading-6">Пароль</label>
          <input type="password" name="password" id="password" autoComplete="password" className="block w-full rounded-md bg-blue-500/10 border-blue-100 px-6 py-4 text-sm mt-2" required></input>
        </div>

        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
        {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
        <input type="hidden" name="redirectTo" value="/" />
        <Button type="submit" aria-disabled={isPending}>Вход</Button>
        <Link className="text-center" href="/">Забыли пароль?</Link>
      </div>
    </form>
    </>
  );
}
