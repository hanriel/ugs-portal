import HeaderClock from './headerClock'
import HeaderDate from './headerDate'
import Image from 'next/image'
import { auth, signOut } from '@/auth';

export default async function Header() {
  const session = await auth()
  if (!session?.user) return null

  console.log(session)

  return (
    <>
      <header className="flex gap-x-8 justify-between items-center">
          <input className="grow rounded-md bg-blue-500/10 border-blue-100 px-6 py-4 text-sm ml-0.5" placeholder="Поиск по порталу"></input>
          <HeaderDate/>
          <HeaderClock/>
          <form action={async () => {
            'use server';
            await signOut();
            }}>
              <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700">Выход</button>
            </form>
          <span>{session.user.name}</span>
          <Image
              src={session?.user?.image || "/avatars/01.png"}
              alt="@shadcn"
              width={64}
              height={64}
            />
      </header>
    </>
  )
}