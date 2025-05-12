import React from "react";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "@shared/api/api";
import { clsx } from 'clsx';
import { useIsAuth } from "entities/Session";

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
        clearAuth()
        navigate('/login')
      } catch (e) {
        console.error('Ошибка при выходе', e)
      }
    }

    if (!isAuth) return null

    return (<button className={clsx([className])} onClick={handleLogout}>Выйти</button>)
}