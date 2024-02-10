
import { useState } from 'react'
 
export default function Aside() {
  return (
    <>
        <aside className="aside__block">
            <div className="aside__container">
            <a className="brand" href="/">
                <img className="brand__logo" src="logo.svg" width={54}></img>
                <span className="brand__title">ГБПОУ ПМК</span>
                <span className="brand__subtitle">УГС 09.00.00</span>
            </a>

            <nav className="header__nav">
                <ul className="nav__list">
                <li className="nav__item">
                    <a className="nav__link" href="/presence">
                    <i className="icons-1"></i>
                    <span>Посещаемость</span>
                    </a>
                    <div className="nav__popup">
                    <span>
                        <i className="icons-catmore"></i>
                    </span>
                    </div>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="/progress">
                    <i className="icons-2"></i>
                    <span>Успеваемость</span>
                    </a>
                    <div className="nav__popup">
                    <span>
                        <i className="icons-catmore"></i>
                    </span>
                    </div>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="/epos">
                    <i className="icons-3"></i>
                    <span>ЭПОС.СПО</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="/report">
                    <i className="icons-4"></i>
                    <span>Отчёты</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="/admin">
                    <i className="icons-5"></i>
                    <span>Старостам</span>
                    </a>
                </li>
                </ul>
            </nav>
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