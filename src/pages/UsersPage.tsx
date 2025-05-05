import { useGetUsersQuery } from '../app/api.tsx'
import UserCard from '../components/UserCard.tsx'
import React, {useState } from "react"


export const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useGetUsersQuery ({ page: currentPage, count: 10 })

  if (isLoading) return <div className="p-4">Загрузка...</div>

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Пользователи</h1>

      <div className="grid gap-4">
        {data?.items.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Назад
        </button>
        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Вперёд
        </button>
      </div>
    </div>
  )
}
