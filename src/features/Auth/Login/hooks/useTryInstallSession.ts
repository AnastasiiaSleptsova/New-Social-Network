import { useEffect } from "react";
import { setIsAuth } from "@entities/Session";
import { useGetMeQuery } from "@shared/api/api";
import { useAppDispatch } from "@app/store";

export const useTryInstallSession = () => {
  const { data: me, isLoading, error } = useGetMeQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (me?.data.id) {
      dispatch(setIsAuth(true));
    }
  }, [me?.data.id, dispatch]);

  return { isLoading, me, error };
};
