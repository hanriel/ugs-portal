export default function Navigation() {
    return (
        <>
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
        </>
    )
}