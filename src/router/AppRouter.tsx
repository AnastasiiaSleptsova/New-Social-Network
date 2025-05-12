import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '@pages/HomePage'
import LoginPage from '@pages/LoginPage'
import UsersPage from '@features/Users/UsersPage'
import ProfilePage from '@features/Profile/ProfilePage'
import { appRoutes } from '@shared/const/appRouter/appRoutes'
import { Layout } from '@pages/Layout/Layout'

// TODO сделать лейзи

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={appRoutes.main} element={<HomePage />} />
        <Route path={appRoutes.users} element={<UsersPage />} />
        <Route path={`${appRoutes.profile}/:userId`} element={<ProfilePage />} />
      </Route>
      <Route path={appRoutes.login} element={<LoginPage />} />

      <Route path="*" element={<Navigate to={appRoutes.main} />} />
    </Routes>
  )
}

export default AppRouter