import React from "react"
import { useForm } from "react-hook-form"
import { useLoginMutation } from "@shared/api/api"
// import { Link } from "react-router-dom"

import styles from './LoginForm.module.scss'
import { setIsAuth } from "@entities/Session/model/authSlice"
import { useDispatch } from "react-redux"

type FormData = {
  email: string
  password: string
}

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()

  const onSubmit = async (data: FormData) => {
    try {
      await login(data).unwrap()
      dispatch(setIsAuth(true))
      
    } catch (err) {
      // TODO Можно сделать state errorMessage, или вывести тост об ошибке
      console.error("Ошибка авторизации", err)
    }
  }

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
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}
      </div>

      <button type="submit" className={styles.submitButton} disabled={isLoading}>
        {isLoading ? "Входим..." : "Войти"}
      </button>
    </form>
  )
}
