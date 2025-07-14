import React from 'react'
import { RegistrationForm } from '@features/Auth'
import { Header } from '@widgets/Header'

import styles from './RegisterPage.module.scss'

export const RegistrationPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>
        <RegistrationForm />
      </main>
    </div>
  )
}
