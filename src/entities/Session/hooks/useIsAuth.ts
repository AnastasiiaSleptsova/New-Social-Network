import { useMeQuery } from "@shared/api/api"
import { useCallback, useEffect, useState } from "react"

export const useIsAuth = () => {
    const [isAuth, setIsAuth] = useState(false)

    const { data: me, isLoading } = useMeQuery()

    const clearAuth = useCallback(() => setIsAuth(false), [])

    useEffect(() => {
        setIsAuth(!!me?.data?.id)
    }, [me])

    return {isAuth, isLoading, clearAuth}
}