import React from 'react'
import Button from '../../../Components/Button/button'
import styles from './auth.module.scss'

function AuthUi() {
  return (
    <div className={styles.authUi}>
      <Button variant="lowFi">Login</Button>
      <Button variant="primary">Sign Up</Button>
    </div>
  )
}

export default AuthUi
