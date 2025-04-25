import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../features/LoginPage.tsx'
import HomePage from '../pages/HomePage.tsx'
import UsersPage from '../features/Users/UsersPage.tsx'
import ProfilePage from '../features/Profile/ProfilePage.tsx'


const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage  />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/profile/:userId" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRouter