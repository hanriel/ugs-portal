
import { useState } from 'react'
import Navigation from './navigation'
import Brand from './brand'
 
export default function Aside() {
  return (
    <>
        <aside className={`float-left h-full sticky top-0 w-72 z-50`}>
            <div className="aside__container">

            <Brand />
            <Navigation />

            <p className="aside__descr">Избранные и закрытые разделы будут доступны после <a href="/singin">Авторизации</a></p>
            <footer className="aside__footer">
                <a className="nav__link" href="https://t.me/hanriel">
                <i className="icons-heart"></i>
                <span>Made with love by Fedoseev&nbsp;D.A.</span>
                </a>
            </footer>
            </div>            
        </aside>
    </>
  )
}