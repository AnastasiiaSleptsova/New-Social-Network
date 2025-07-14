import React from 'react'
import { LoginForm } from '@features/Auth'
import { Header } from '@widgets/Header'

import styles from './LoginPage.module.scss'

const LoginPage = () => {
  
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>
        <LoginForm />
      </main>
    </div>
  )
}

export default LoginPage