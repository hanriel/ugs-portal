import { useState } from 'react'
 
export default function Header() {
  return (
    <>
      <header className="flex gap-x-8 justify-between items-center">
          <input className="grow rounded-md bg-blue-500/10 border-blue-100 px-6 py-4 text-sm ml-0.5" placeholder="Поиск по порталу"></input>
          <span className="text-[14px] cursor-pointer" id="date">8 февраля 2024<br/>Четверг</span>
          <span className="w-20 font-bold text-[32px] cursor-pointer" id="time">23<span className="blink_me">:</span>30</span>
          <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">Вход</button>
      </header>
    </>
  )
}