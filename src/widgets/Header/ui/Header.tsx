import { LogoutButton } from '@features/Auth'
import styles from './styles.module.scss'

export const Header = () => {
    return (
        <header className={styles.root}>
        <div className={styles.container}>
            <div className={styles.logo}>MySocial</div>
            <div className={styles.actions}>
                <LogoutButton />
            </div>
        </div>
    </header>
    )
}