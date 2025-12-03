import React from "react";
import { useParams } from "react-router-dom";
import { useGetProfileQuery } from "@shared/api/api";
import defaultAvatar from "@shared/assets/smallAvatar.png";
import { Navbar } from "@widgets/Navbar/ui/Navbar";

import styles from "./ProfilePage.module.scss";

const ProfilePage: React.FC = () => {
  const { userId } = useParams<{ userId: string | undefined }>();

  const isInvalidId = isNaN(Number(userId)) || Number(userId) === 0;
  const correctId = Number(userId);

  const { data, error, isLoading } = useGetProfileQuery(correctId, {
    skip: isInvalidId,
  });

  if (isLoading) return <p>Загрузка профиля...</p>;
  if (error || !data) return <p>Ошибка при загрузке профиля</p>;

  return (
    <div className={styles.root}>
      <Navbar />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src={data.photos.large || defaultAvatar}
          alt={data.fullName}
        />
        <div className={styles.info}>
          <h2 className={styles.name}>{data.fullName}</h2>
          <p className={styles.about}>
            <strong>О себе:</strong> {data.aboutMe || "Не указано"}
          </p>
          {data.lookingForAJob && (
            <p className={styles.job}>
              🔍 Ищу работу: {data.lookingForAJobDescription}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
