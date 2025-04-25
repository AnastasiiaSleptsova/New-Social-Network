import { configureStore } from '@reduxjs/toolkit'
import { socialApi } from './api.ts'

export const store = configureStore({
  reducer: {
    [socialApi.reducerPath]: socialApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socialApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
