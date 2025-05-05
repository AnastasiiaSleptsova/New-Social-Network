import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../app/api.ts'

const LoginPage = () => {
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
    <div className="max-w-xs mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
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
    </div>
  )
}

export default LoginPage