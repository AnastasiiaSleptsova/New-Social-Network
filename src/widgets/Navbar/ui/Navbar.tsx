import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

export const Navbar = () => {

    const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
        return `${styles.link} ${isActive ? styles.active : ''}`
    }

    return (
        <aside className={styles.root}>
            <nav className={styles.nav}>
                <NavLink to="/profile" className={getNavLinkClass}>
                    Моя страница
                </NavLink>
                <NavLink to="/users" className={getNavLinkClass}>
                    Пользователи
                </NavLink>
                <NavLink to="/something" className={getNavLinkClass}>
                    Что-то ещё
                </NavLink>
            </nav>
        </aside>
    )
}