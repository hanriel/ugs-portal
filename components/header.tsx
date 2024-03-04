import { useState } from 'react'
import HeaderClock from './headerClock'
import HeaderDate from './headerDate'
 
export default function Header() {
  return (
    <>
      <header className="flex gap-x-8 justify-between items-center">
          <input className="grow rounded-md bg-blue-500/10 border-blue-100 px-6 py-4 text-sm ml-0.5" placeholder="Поиск по порталу"></input>
          <HeaderDate/>
          <HeaderClock/>
          <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">Вход</button>
      </header>
    </>
  )
}