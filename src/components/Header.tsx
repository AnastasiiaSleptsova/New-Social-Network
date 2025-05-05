import { LogoutButton } from './LogoutButton.tsx'
import React from "react"


export const Header = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">👤 Social Network</h1>
      <LogoutButton />
    </header>
  )
}