import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import UsersPage from "@features/Users/UsersPage";
import ProfilePage from "@features/Profile/ProfilePage";
import { appRoutes } from "@shared/const/appRouter/appRoutes";
import { Layout } from "@pages/Layout";
import { useIsAuth } from "@entities/Session";
import { useTryInstallSession } from "@features/Auth/Login";

// TODO сделать лейзи по всем страницам

const AppRouter: React.FC = () => {
  const { me, isLoading } = useTryInstallSession();
  const { isAuth } = useIsAuth();

  if (isLoading) {
    return <div style={{ padding: 24 }}>Проверяем авторизацию...</div>;
  }

  if (isAuth && me?.data.id) {
    return (
      <Routes>
        <Route element={<Layout />}>
          <Route path={appRoutes.main} element={<HomePage />} />
          <Route path={appRoutes.users} element={<UsersPage />} />
          <Route
            path={`${appRoutes.profile}/:userId`}
            element={<ProfilePage />}
          />
        </Route>

        <Route path="*" element={<Navigate to={appRoutes.main} />} />
      </Routes>
    );
  }

  // Не авторизован
  return (
    <Routes>
      <Route path={appRoutes.login} element={<LoginPage />} />
      <Route path="*" element={<Navigate to={appRoutes.login} />} />
    </Routes>
  );
};

export default AppRouter;
