import React from "react";
import { User } from "../../types";
import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from "@shared/api/api";
import { Link } from "react-router-dom";
import defaultAvatar from "@shared/assets/smallAvatar.png";
import styles from "./styles.module.scss";

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
  const [followUser, { isLoading: isFollowLoading }] = useFollowUserMutation();
  const [unfollowUser, { isLoading: isUnfollowLoading }] =
    useUnfollowUserMutation();

  const [actionError, setActionError] = React.useState<string | null>(null);

  const isProcessing = isFollowLoading || isUnfollowLoading;

  const handleFollow = async () => {
    try {
      setActionError(null);

      if (user.followed) {
        await unfollowUser(user.id).unwrap();
      } else {
        await followUser(user.id).unwrap();
      }
    } catch (err) {
      console.error("Ошибка подписки/отписки", err);
      setActionError("Что-то пошло не так. Попробуйте ещё раз.");
    }
  };

  return (
    <div className={styles.card}>
      <Link to={`/profile/${user.id}`} className={styles.link}>
        <img
          src={user.photos.small || defaultAvatar}
          alt={user.name}
          className={styles.avatar}
        />
        <h3 className={styles.name}>{user.name}</h3>
      </Link>

      <p className={styles.status}>{user.status || "Без статуса"}</p>

      <button
        className={styles.button}
        onClick={handleFollow}
        disabled={isProcessing}
      >
        {isProcessing
          ? "Обрабатываем..."
          : user.followed
          ? "Отписаться"
          : "Подписаться"}
      </button>

      {actionError && <p className={styles.error}>{actionError}</p>}
    </div>
  );
};

export default UserCard;

// import React from 'react'
// import { User } from '../../types'
// import { useFollowUserMutation, useUnfollowUserMutation } from '@shared/api/api'
// import { Link } from 'react-router-dom'
// import defaultAvatar from '@shared/assets/smallAvatar.png'
// import styles from './styles.module.scss'

// interface Props {
//   user: User
// }

// const UserCard: React.FC<Props> = ({ user }) => {
//   const [followUser] = useFollowUserMutation()
//   const [unfollowUser] = useUnfollowUserMutation()

//   const handleFollow = () => {
//     if (user.followed) {
//       unfollowUser(user.id)
//     } else {
//       followUser(user.id)
//     }
//   }

//   return (
//     <div className={styles.card}>
//       <Link to={`/profile/${user.id}`} className={styles.link}>
//         <img
//           src={user.photos.small || defaultAvatar}
//           alt={user.name}
//           className={styles.avatar}
//         />
//         <h3 className={styles.name}>{user.name}</h3>
//       </Link>
//       <p className={styles.status}>{user.status || 'Без статуса'}</p>
//       <button
//         className={styles.button}
//         onClick={handleFollow}
//       >
//         {user.followed ? 'Отписаться' : 'Подписаться'}
//       </button>
//     </div>
//   )
// }

// // ToDo
// // дизейблить кнопку во время запроса.
// // обрабатывать ошибки (хотя бы console + небольшой текст).

// export default UserCard
