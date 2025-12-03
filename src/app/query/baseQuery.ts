// import {
//     fetchBaseQuery,
//     type BaseQueryFn,
//     type FetchArgs,
//     type FetchBaseQueryError,
//   } from '@reduxjs/toolkit/query'
// import { appRoutes } from '@shared/const/appRouter';

// const baseQuery = fetchBaseQuery({
//       baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
//       headers: {
//         "API-KEY": "c93503c5-f080-4741-9673-76aa6a3b3c2d"
//       },
//     credentials: "include"
// })

// Перенести ключ в .env:
// .env:
// REACT_APP_API_KEY=твоя_строка

// export const myBaseQuery: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//     let result = await baseQuery(args, api, extraOptions)

//     if (result.error && result.error.status === 401) {
//         // TODO убрать 'as'
//         const errorData = result.error.data as { message?: string };

//         if(errorData?.message === 'Authorization has been denied for this request.') {
//             // TODO переписать на dispatch и authSlice
//             window.location.href = appRoutes.login;
//         }
//     }

//     return result
// }

// src/app/query/baseQuery.ts

import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { clearAuth } from "@entities/Session/model/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://social-network.samuraijs.com/api/1.0/",
  credentials: "include",
  prepareHeaders: (headers) => {
    const apiKey = process.env.REACT_APP_API_KEY;

    if (apiKey) {
      headers.set("API-KEY", apiKey);
    }

    return headers;
  },
});

export const myBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    // аккуратно достаем message
    const errorData = result.error.data as { message?: string };

    if (
      errorData?.message === "Authorization has been denied for this request."
    ) {
      // вместо window.location.href
      api.dispatch(clearAuth());
    }
  }

  return result;
};
