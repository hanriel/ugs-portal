'use client';

import Brand from "@/components/brand";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        username,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Неверный логин или пароль');
      } else {
        router.push('/');
      }
    } catch (err) {
      setError('Произошла ошибка. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <Brand/>
        <h2 className="text-lg font-bold self-center mr-6">Система авторизации</h2>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-[1fr_1fr_1fry] gap-8">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
        <div className="">
          <label htmlFor="username" className="block text-sm font-medium leading-6">Логин</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" name="username" autoComplete="username" className="block w-full rounded-md bg-blue-500/10 border-blue-100 px-6 py-4 text-sm mt-2" required></input>
        </div>

        <div className="">
          <label htmlFor="password" className="block text-sm font-medium leading-6">Пароль</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" autoComplete="password" className="block w-full rounded-md bg-blue-500/10 border-blue-100 px-6 py-4 text-sm mt-2" required></input>
        </div>

        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
        {error && (
            <>
              <p className="text-sm text-red-500">{error}</p>
            </>
          )}
        </div>
        <Button type="submit" aria-disabled={loading}>
        {loading ? 'Вход...' : 'Войти'}
        </Button>
      </div>
    </form>
    </>
  );
}
