import React, { useState } from "react"
import { useLoginMutation } from "@shared/api/api"
import { useNavigate } from "react-router-dom"

export const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login] = useLoginMutation() // RTK Query hook
    const navigate = useNavigate() // Для редиректа
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      try {
        await login({ email, password }) // Пробуем авторизоваться
        navigate('/profile') // Если логин успешен, редиректим на страницу профиля
      } catch (error) {
        console.error('Ошибка при логине', error)
      }
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Log In
        </button>
      </form>
    )
}