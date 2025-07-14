import { createApi } from '@reduxjs/toolkit/query/react'
import { AuthMeResponse, FollowResponse, GetUsersParams, GetUsersResponse, LoginRequest, LoginResponse, ProfileResponse, UnfollowResponse } from '../../types'
import { myBaseQuery } from '../../app/query/baseQuery'

export const socialApi = createApi({
    reducerPath: 'socialApi',
    baseQuery: myBaseQuery,
    tagTypes: ['User', 'Profile', 'Auth'],
    endpoints: (builder) => ({
      // AUTH
      getMe: builder.query<AuthMeResponse, void>({
        query: () => 'auth/me',
        providesTags: ['Auth'],
      }),
      
      login: builder.mutation<LoginResponse, LoginRequest>({
        query: (body) => ({
          url: 'auth/login',
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Auth'],
      }),

      logout: builder.mutation<void, void>({
        query: () => ({
          url: 'auth/login',
          method: 'DELETE',
        }),
        invalidatesTags: ['Auth'],
      }),
  
      // USERS
      getUsers: builder.query<GetUsersResponse, GetUsersParams>({
        query: ({ page = 1, count = 10 }) => `users?page=${page}&count=${count}`,
        providesTags: ['User'],
      }),
      followUser: builder.mutation<FollowResponse, number>({
        query: (userId) => ({
          url: `follow/${userId}`,
          method: 'POST',
        }),
        invalidatesTags: ['User'],
      }),
      unfollowUser: builder.mutation<UnfollowResponse, number>({
        query: (userId) => ({
          url: `follow/${userId}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['User'],
      }),
  
      // PROFILE
      getProfile: builder.query<ProfileResponse, number>({
        query: (userId) => `profile/${userId}`,
        providesTags: ['Profile'],
      }),
      getStatus: builder.query<string, number>({
        query: (userId) => `profile/status/${userId}`,
      }),
      updateStatus: builder.mutation<void, string>({
        query: (status) => ({
          url: `profile/status`,
          method: 'PUT',
          body: { status },
        }),
        invalidatesTags: ['Profile'],
      }),
    }),
  })
  
  // Экспортируем хуки
  export const {
    useGetMeQuery,
    useLoginMutation,
    useLogoutMutation,
    useGetUsersQuery,
    useFollowUserMutation,
    useUnfollowUserMutation,
    useGetProfileQuery,
    useGetStatusQuery,
    useUpdateStatusMutation,
  } = socialApi