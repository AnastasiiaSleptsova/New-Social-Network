import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'
import { useGetMeQuery } from '@shared/api/api'
import { appRoutes } from '@shared/const/appRouter'

export const Navbar = () => {
  const { data: me } = useGetMeQuery()

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.link} ${isActive ? styles.active : ''}`

  const profileLink = me?.data.id
    ? appRoutes.profileById(me.data.id)
    : appRoutes.main // запасной вариант

  return (
    <aside className={styles.root}>
      <nav className={styles.nav}>
        <NavLink to={profileLink} className={getNavLinkClass}>
          Моя страница
        </NavLink>
        <NavLink to={appRoutes.users} className={getNavLinkClass}>
          Пользователи
        </NavLink>
        {/* временно убрал messages, пока нет страницы */}
        {/* <NavLink to="/messages" className={getNavLinkClass}>Сообщения</NavLink> */}
      </nav>
    </aside>
  )
}
