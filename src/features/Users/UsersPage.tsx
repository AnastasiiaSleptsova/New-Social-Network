import React from 'react'
import { useGetUsersQuery } from '@shared/api/api'
import UserCard from '../../components/UserCard'

const UsersPage: React.FC = () => {
  const { data, error, isLoading } = useGetUsersQuery({ page: 1, count: 10 })

  if (isLoading) return <p>Loading users...</p>
  if (error) return <p>Error loading users</p>

  return (
    <div>
      <h2>Users</h2>
      {data?.items.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UsersPage