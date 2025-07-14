import React from "react";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "@shared/api/api";
import { clsx } from 'clsx';
import { useIsAuth } from "@entities/Session";
import { appRoutes } from "@shared/const/appRouter";

type LogoutButtonProps = {
    className?: string
}

export const LogoutButton = ({
    className
}: LogoutButtonProps) => {
    const [logout] = useLogoutMutation()
    const { isAuth, clearAuth } = useIsAuth()
    const navigate = useNavigate()
  
    const handleLogout = async () => {
      try {
        await logout()
        localStorage.clear()
        navigate(appRoutes.login)
        clearAuth()
      } catch (e) {
        console.error('Ошибка при выходе', e)
      }
    }

    if (!isAuth) return null

    return (<button className={clsx([className])} onClick={handleLogout}>Выйти</button>)
}