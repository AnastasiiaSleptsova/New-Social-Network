import React, { useState } from 'react'
import { useGetUsersQuery } from '@shared/api/api'
import UserCard from '../../components/UserCard'
import { Navbar } from 'widgets/Navbar/ui/Navbar'

import styles from './styles.module.scss'

const UsersPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isLoading } = useGetUsersQuery({ page: currentPage, count: 10 })

  if (isLoading) return <p className={styles.status}>Загрузка пользователей...</p>
  if (error) return <p className={styles.status}>Ошибка при загрузке</p>

  return (
    <div className={styles.root}>
      <Navbar />
      <main className={styles.content}>
        <h1 className={styles.title}>Пользователи</h1>

        <div className={styles.grid}>
          {data?.items.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        <div className={styles.pagination}>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Назад
          </button>
          <span>Страница {currentPage}</span>
          <button onClick={() => setCurrentPage((p) => p + 1)}>Вперёд</button>
        </div>
      </main>
    </div>
  )
}

export default UsersPage