import React from 'react'
import { User } from '../types'
import { useFollowUserMutation, useUnfollowUserMutation } from '@shared/api/api'
import { Link } from 'react-router-dom'
import defaultAvatar from '@shared/assets/smallAvatar.png'
import styles from './styles.module.scss'

interface Props {
  user: User
}

const UserCard: React.FC<Props> = ({ user }) => {
  const [followUser] = useFollowUserMutation()
  const [unfollowUser] = useUnfollowUserMutation()

  const handleFollow = () => {
    if (user.followed) {
      unfollowUser(user.id)
    } else {
      followUser(user.id)
    }
  }

  return (
    <div className={styles.card}>
      <Link to={`/profile/${user.id}`} className={styles.link}>
        <img
          src={user.photos.small || defaultAvatar}
          alt={user.name}
          className={styles.avatar}
        />
        <h3 className={styles.name}>{user.name}</h3>
      </Link>
      <p className={styles.status}>{user.status || 'Без статуса'}</p>
      <button
        className={styles.button}
        onClick={handleFollow}
      >
        {user.followed ? 'Отписаться' : 'Подписаться'}
      </button>
    </div>
  )
}

export default UserCard