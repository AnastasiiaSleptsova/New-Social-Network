
import { setIsAuth } from "@entities/Session"
import { useGetMeQuery } from "@shared/api/api"
import { useDispatch } from "react-redux"

export const useTryInstallSession = () => {
    const { data: me, isLoading } = useGetMeQuery()
    const dispatch = useDispatch()

    if (me?.data.id) {
      dispatch(setIsAuth(true))
    }

    return { isLoading: isLoading, me }
}