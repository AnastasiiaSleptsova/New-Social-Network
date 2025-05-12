import React from 'react'
import { LoginForm } from '@features/Auth'


const LoginPage = () => {
 

  return (
    <div className="max-w-xs mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <LoginForm />
    </div>
  )
}

export default LoginPage