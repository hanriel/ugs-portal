import NavItem from "./nav-item";

export default function Navigation() {
    return (
        <>
            <nav className="my-6">
                <ul className="nav__list">
                    <li className="relative">
                        <NavItem label="Посещаемость" link="/presence" icon="icons-1"/>
                    </li>
                    <li className="relative">
                        <NavItem label="Успеваемость" link="/progress" icon="icons-2"/>
                    </li>
                    <li className="relative">
                        <NavItem label="ЭПОС.СПО" link="/progress" icon="icons-3"/>
                    </li>
                    <li className="relative">
                        <NavItem label="Отчёты" link="/progress" icon="icons-4"/>
                    </li>
                    <li className="relative">
                        <NavItem label="Старостам" link="/progress" icon="icons-5"/>
                    </li>
                </ul>
            </nav>
        </>
    )
}