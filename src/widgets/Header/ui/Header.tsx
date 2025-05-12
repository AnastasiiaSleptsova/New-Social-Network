import { LogoutButton } from '@features/Auth'
import styles from './stypes.module.scss'

export const Header = () => {
    return (
    <div className={styles.root}>
        <LogoutButton />
    </div>
    )
}