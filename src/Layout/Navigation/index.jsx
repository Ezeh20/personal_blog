import React from 'react'
import styles from './navigation.module.scss'
import Container from '../../Components/Container'

function Navigation() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span>2</span>
            <img
              src="/public/assets/cent-animated.svg"
              alt="logo"
              className={styles.logoSize}
            />
            <span className={styles.cents}>ents</span>
          </div>

          <ul>li</ul>
          <div>user</div>
        </nav>
      </Container>
    </header>
  )
}

export default Navigation
