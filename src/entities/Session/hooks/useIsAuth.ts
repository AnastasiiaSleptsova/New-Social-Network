import { useAppDispatch, useAppSelector } from "@app/store"
import { clearAuth } from "../model/authSlice"

export const useIsAuth = () => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector((state) => state.auth.isAuth)

    const handleClearAuth = () => dispatch(clearAuth())

  return { isAuth, clearAuth: handleClearAuth }
}