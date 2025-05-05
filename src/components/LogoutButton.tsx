import React from "react"
import { useLogoutMutation } from '../app/api.ts'
import { useNavigate } from 'react-router-dom'

export const LogoutButton = () => {
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (e) {
      console.error('Ошибка при выходе', e)
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Выйти
    </button>
  )
}