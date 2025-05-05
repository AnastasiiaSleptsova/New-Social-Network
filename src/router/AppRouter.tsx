import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../features/LoginPage.tsx'
import HomePage from '../pages/HomePage.tsx'
import UsersPage from '../features/Users/UsersPage.tsx'
import ProfilePage from '../features/Profile/ProfilePage.tsx'
import { appRoutes } from '../shared/const/appRouter/appRoutes.ts'


const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={appRoutes.main} element={<HomePage  />} />
      <Route path={appRoutes.login} element={<LoginPage />} />
      <Route path={appRoutes.users} element={<UsersPage />} />
      <Route path={`${appRoutes.profile}/:userId`} element={<ProfilePage />} />
      <Route path="*" element={<Navigate to={appRoutes.main} />} />
    </Routes>
  )
}

export default AppRouter