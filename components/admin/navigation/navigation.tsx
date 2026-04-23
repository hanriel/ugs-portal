import NavItem from "@/components/navigation/nav-item";

export default function Navigation() {
    return (
        <>
            <nav className="my-6">
                <ul className="nav__list">
                    <li className="relative">
                        <NavItem label="Отделения" link="/admin/branches" icon="icons-1"/>
                    </li>
                    <li className="relative">
                        <NavItem label="Специальности" link="/admin/specialties" icon="icons-1"/>
                    </li>
                    <li className="relative">
                        <NavItem label="Группы" link="/admin/groups" icon="icons-1"/>
                    </li>
                    <li className="relative">
                        <NavItem label="Студенты" link="/admin/students" icon="icons-1"/>
                    </li>
                    <li className="relative">
                        <NavItem label="Преподаватели" link="/admin/teachers" icon="icons-1"/>
                    </li>
                    <li className="relative">
                        <NavItem label="Посещаемость" link="/admin/presence" icon="icons-1"/>
                    </li>
                    <li className="relative">
                        <NavItem label="Успеваемость" link="/admin/progress" icon="icons-2"/>
                    </li>
                    <li className="relative">
                        <NavItem label="ЭПОС.СПО" link="/admin/epos" icon="icons-3"/>
                    </li>
                    <li className="relative">
                        <NavItem label="Отчёты" link="/admin/report" icon="icons-4"/>
                    </li>
                </ul>
            </nav>
        </>
    )
}