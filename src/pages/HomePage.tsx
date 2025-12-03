import React from "react";
import { Navigate } from "react-router-dom";
import { appRoutes } from "@shared/const/appRouter";
// import ProfilePage from '@features/Profile/ProfilePage'
import { useGetMeQuery } from "@shared/api/api";
// import { Navbar } from '@widgets/Navbar/ui/Navbar'
import styles from "./HomePage.module.scss";

// const HomePage: React.FC = () => {
//   const { data: me, isLoading } = useGetMeQuery()

//   if (isLoading) {
//     return <h1>Загрузка...</h1>
//   }

//   if (!me?.data.id) {
//     return null
//   }

//   if (me) {
//     return <Navigate to={`/profile/${me.data.id}`} />
//   }

//   return (
//     <div className={styles.root}>
//       <Navbar />
//       <main className={styles.content}>
//         <ProfilePage/>
//       </main>
//     </div>
//   )
// }

const HomePage: React.FC = () => {
  const { data: me, isLoading } = useGetMeQuery();

  if (isLoading) return <h1>Загрузка...</h1>;

  if (!me?.data.id) {
    return <Navigate to={appRoutes.login} />;
  }

  return <Navigate to={appRoutes.profileById(me.data.id)} />;
};

export default HomePage;
