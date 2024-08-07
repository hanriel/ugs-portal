'use client';

import Brand from "@/components/brand";
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';

export default function Login() {

  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <>
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <Brand/>
        <h2 className="text-lg font-bold self-center mr-6">Система авторизации</h2>
        {/* <a className="text-xs" href="/all">ПОРТАЛ УГС 09.00.00</a> */}
      </div>
      <form action={formAction} className="grid grid-cols-[1fr_1fr_1fry] gap-8">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
        <div className="">
          <label htmlFor="login" className="block text-sm font-medium leading-6">Логин</label>
          <input id="login" name="login" type="username" autoComplete="username" className="block w-full rounded-md bg-blue-500/10 border-blue-100 px-6 py-4 text-sm mt-2" required></input>
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
        <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700" type="submit" aria-disabled={isPending}>Вход</button>
        <a className="text-blue-700 hover:text-blue-800 font-medium text-sm dark:text-blue-600 dark:hover:text-blue-700 text-center" href="/">Забыли пароль?</a>
      </div>
    </form>
    </>
  );
}
