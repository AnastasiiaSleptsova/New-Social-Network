import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "@shared/const/appRouter";

import styles from "./RegistrationForm.module.scss";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    // Тут должна быть логика регистрации, например API-запрос
    console.log("Данные регистрации:", data);
    navigate(appRoutes.login); // после регистрации
  };

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Email обязателен" })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="password">Пароль</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Пароль обязателен",
            minLength: { value: 6, message: "Минимум 6 символов" },
          })}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="confirmPassword">Повторите пароль</label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: "Подтвердите пароль",
            validate: (value) => value === password || "Пароли не совпадают",
          })}
        />
        {errors.confirmPassword && (
          <p className={styles.error}>{errors.confirmPassword.message}</p>
        )}
      </div>

      <button type="submit" className={styles.submitButton}>
        Зарегистрироваться
      </button>

      <div className={styles.loginHint}>
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </div>
    </form>
  );
};
