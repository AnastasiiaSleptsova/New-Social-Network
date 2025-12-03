export const appRoutes = {
  main: "/",
  login: "/login",
  users: "/users",
  profile: "/profile",
  profileById: (id: number | string) => `/profile/${id}`,
} as const;
